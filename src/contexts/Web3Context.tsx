import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers, BrowserProvider, JsonRpcSigner } from 'ethers';
import Web3Modal from 'web3modal';
import { JsonRpcSigner as EthersJsonRpcSigner } from '@ethersproject/providers';

interface Web3ContextType {
  account: string | null;
  chainId: number | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  isConnecting: boolean;
  provider: BrowserProvider | null;
  signer: JsonRpcSigner | null;
  error: string | null;
  connectWallet: () => Promise<void>;
  isMetaMaskInstalled: boolean;
  balance: string | null;
}

const Web3Context = createContext<Web3ContextType>({
  account: null,
  chainId: null,
  connect: async () => {},
  disconnect: async () => {},
  isConnecting: false,
  provider: null,
  signer: null,
  error: null,
  connectWallet: async () => {},
  isMetaMaskInstalled: false,
  balance: null,
});

const providerOptions = {
  // Add more providers here as needed
};

const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions,
});

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [balance, setBalance] = useState<string | null>(null);

  // Check if MetaMask is installed
  useEffect(() => {
    const checkMetaMaskInstalled = () => {
      const { ethereum } = window as any;
      setIsMetaMaskInstalled(!!ethereum && !!ethereum.isMetaMask);
    };
    checkMetaMaskInstalled();
  }, []);

  // Update balance when account changes
  useEffect(() => {
    const updateBalance = async () => {
      if (account && provider) {
        try {
          const balance = await provider.getBalance(account);
          setBalance(ethers.formatEther(balance));
        } catch (err) {
          console.error('Error fetching balance:', err);
        }
      } else {
        setBalance(null);
      }
    };
    updateBalance();
  }, [account, provider]);

  const connect = async () => {
    try {
      setIsConnecting(true);
      setError(null);
      
      // Check if MetaMask is installed
      const { ethereum } = window as any;
      if (!ethereum || !ethereum.isMetaMask) {
        setError('MetaMask is not installed. Please install MetaMask extension to continue.');
        setIsConnecting(false);
        return;
      }

      // Set a timeout for connection attempt
      const connectionTimeout = setTimeout(() => {
        if (isConnecting) {
          setError('Connection attempt timed out. Please try again or check if MetaMask is responding.');
          setIsConnecting(false);
        }
      }, 15000); // 15 seconds timeout

      const instance = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(instance);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const network = await provider.getNetwork();
      
      // Clear timeout as connection was successful
      clearTimeout(connectionTimeout);

      setProvider(provider);
      setSigner(signer);
      setAccount(address);
      setChainId(Number(network.chainId));

      // Get balance
      const balance = await provider.getBalance(address);
      setBalance(ethers.formatEther(balance));

      // Setup listeners
      instance.on('accountsChanged', async (accounts: string[]) => {
        if (accounts.length > 0) {
          const newSigner = await provider.getSigner();
          setSigner(newSigner);
          setAccount(accounts[0]);
        } else {
          setSigner(null);
          setAccount(null);
          setBalance(null);
        }
      });

      instance.on('chainChanged', (chainId: string) => {
        setChainId(Number(chainId));
        // Update balance when chain changes
        updateBalance();
      });

      instance.on('disconnect', () => {
        disconnect();
      });

    } catch (error) {
      console.error('Error connecting wallet:', error);
      setError('Failed to connect wallet. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  const updateBalance = async () => {
    if (account && provider) {
      try {
        const balance = await provider.getBalance(account);
        setBalance(ethers.formatEther(balance));
      } catch (err) {
        console.error('Error fetching balance:', err);
      }
    }
  };

  const disconnect = async () => {
    try {
      await web3Modal.clearCachedProvider();
      setProvider(null);
      setSigner(null);
      setAccount(null);
      setChainId(null);
      setError(null);
      setBalance(null);
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
      setError('Failed to disconnect wallet. Please try again.');
    }
  };

  const connectWallet = async () => {
    if (!isMetaMaskInstalled) {
      setError('MetaMask is not installed. Please install MetaMask extension to continue.');
      return;
    }
    await connect();
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, []);

  return (
    <Web3Context.Provider
      value={{
        account,
        chainId,
        connect,
        disconnect,
        isConnecting,
        provider,
        signer,
        error,
        connectWallet,
        isMetaMaskInstalled,
        balance,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
} 