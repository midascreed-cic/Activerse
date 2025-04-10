import { ethers } from 'ethers';
import contractABI from './ActiVerseNFT.json';

export interface EventData {
  eventId: string;
  contractAddress: string;
  sdg: string;
  description: string;
}

export class ContractService {
  private contract: ethers.Contract;
  private signer: ethers.Signer;

  constructor(signer: ethers.Signer, contractAddress: string) {
    this.signer = signer;
    this.contract = new ethers.Contract(contractAddress, contractABI, signer);
  }

  async claimNFT(eventData: EventData): Promise<string> {
    try {
      const tx = await this.contract.claimNFT(
        eventData.eventId,
        eventData.sdg,
        eventData.description
      );
      const receipt = await tx.wait();
      return receipt.transactionHash;
    } catch (error) {
      console.error('Error claiming NFT:', error);
      throw new Error('Failed to claim NFT. Please try again.');
    }
  }

  async verifyEventAttendance(eventId: string): Promise<boolean> {
    try {
      return await this.contract.verifyAttendance(eventId);
    } catch (error) {
      console.error('Error verifying attendance:', error);
      throw new Error('Failed to verify event attendance.');
    }
  }

  async getNFTMetadata(tokenId: string): Promise<any> {
    try {
      return await this.contract.tokenURI(tokenId);
    } catch (error) {
      console.error('Error fetching NFT metadata:', error);
      throw new Error('Failed to fetch NFT metadata.');
    }
  }
} 