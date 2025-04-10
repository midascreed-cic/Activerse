import { v4 as uuidv4 } from 'uuid';

interface Transaction {
  id: string;
  from: string;
  to: string;
  timestamp: number;
  type: 'MINT' | 'TRANSFER';
  metadata: any;
}

interface VirtualNFT {
  id: string;
  name: string;
  description: string;
  image: string;
  sdgGoal: number;
  activityType: string;
  owner: string;
  mintedAt: number;
  transactionHash: string;
}

class MockBlockchainService {
  private transactions: Transaction[] = [];
  private nfts: VirtualNFT[] = [];
  private currentWallet: string | null = null;

  constructor() {
    // Load data from localStorage if available
    const savedTransactions = localStorage.getItem('transactions');
    const savedNFTs = localStorage.getItem('nfts');
    const savedWallet = localStorage.getItem('currentWallet');

    if (savedTransactions) this.transactions = JSON.parse(savedTransactions);
    if (savedNFTs) this.nfts = JSON.parse(savedNFTs);
    if (savedWallet) this.currentWallet = savedWallet;
  }

  private saveState() {
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
    localStorage.setItem('nfts', JSON.stringify(this.nfts));
    if (this.currentWallet) {
      localStorage.setItem('currentWallet', this.currentWallet);
    }
  }

  connectWallet(): string {
    if (!this.currentWallet) {
      this.currentWallet = `0x${uuidv4().replace(/-/g, '')}`;
      this.saveState();
    }
    return this.currentWallet;
  }

  async mintVirtualNFT(
    name: string,
    description: string,
    image: string,
    sdgGoal: number,
    activityType: string
  ): Promise<VirtualNFT> {
    if (!this.currentWallet) throw new Error('Wallet not connected');

    // Simulate blockchain delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const nft: VirtualNFT = {
      id: uuidv4(),
      name,
      description,
      image,
      sdgGoal,
      activityType,
      owner: this.currentWallet,
      mintedAt: Date.now(),
      transactionHash: `0x${uuidv4().replace(/-/g, '')}`
    };

    const transaction: Transaction = {
      id: uuidv4(),
      from: '0x0000000000000000000000000000000000000000',
      to: this.currentWallet,
      timestamp: Date.now(),
      type: 'MINT',
      metadata: { nftId: nft.id }
    };

    this.nfts.push(nft);
    this.transactions.push(transaction);
    this.saveState();

    return nft;
  }

  getUserNFTs(): VirtualNFT[] {
    if (!this.currentWallet) return [];
    return this.nfts.filter(nft => nft.owner === this.currentWallet);
  }

  getTransactionHistory(): Transaction[] {
    if (!this.currentWallet) return [];
    return this.transactions.filter(
      tx => tx.from === this.currentWallet || tx.to === this.currentWallet
    );
  }
}

export const mockBlockchain = new MockBlockchainService(); 