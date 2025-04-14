import React from 'react';

export function Terms() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      <div className="prose prose-emerald max-w-none">
        <p className="text-lg text-gray-600 mb-8">Effective Date: March 14, 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
          <p className="text-gray-600 mb-4">
            ActiVerse is a web-based platform that enables users to discover real-world events aligned with the United Nations Sustainable Development Goals (SDGs), and to claim non-fungible tokens (NFTs) by scanning QR codes at eligible events. NFTs are issued via smart contracts and serve as digital badges representing real-life impact.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility</h2>
          <p className="text-gray-600 mb-4">
            You must be at least 13 years old to use the Platform. By using ActiVerse, you represent that you meet this requirement and have the capacity to enter into legally binding agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>No Login Required for Browsing: You can freely view events and content without creating an account.</li>
            <li>Wallet Connection: To claim or view NFTs, you must connect a Web3-compatible wallet (e.g., MetaMask, WalletConnect).</li>
            <li>Security: You are responsible for securing your wallet, device, and QR codes. We do not have access to your wallet or its contents.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. NFT Claims & Smart Contracts</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>QR Code Claims: NFTs are claimed by scanning QR codes distributed at events. Each NFT can only be claimed once.</li>
            <li>Blockchain Transactions: All NFT claims are executed through smart contracts on a supported blockchain. Transaction data is public and immutable.</li>
            <li>Non-transferability: Some NFTs may be "soulbound" (non-transferable) depending on implementation to preserve the authenticity of individual achievements.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Event Listings</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>For Event Organizers: By registering an event, you agree that the information provided is accurate and not misleading. You must own or have permission to use all uploaded content, including QR codes and media.</li>
            <li>Moderation: ActiVerse reserves the right to review, edit, or remove events or content that are misleading, inappropriate, or harmful.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            All content on the Platform (excluding blockchain assets and open-source libraries) is owned or licensed by ActiVerse. You may not use, copy, or distribute any content without our written permission, except as permitted by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Acceptable Use</h2>
          <p className="text-gray-600 mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Use the Platform for illegal or unauthorized purposes.</li>
            <li>Interfere with or disrupt the Platform's services or security.</li>
            <li>Use bots, scrapers, or other automated means to access the Platform.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacy</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>We do not collect personal data unless you submit it via forms (e.g., event registration).</li>
            <li>Wallet addresses are pseudonymous and used only for verification of ownership.</li>
            <li>We do not track your location or store cookies beyond what's required for performance and analytics.</li>
          </ul>
          <p className="text-gray-600">See our <a href="/privacy" className="text-emerald-600 hover:text-emerald-700">Privacy Policy</a> for more information.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimers</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>ActiVerse does not guarantee the availability or authenticity of third-party events.</li>
            <li>NFTs have no monetary value and are symbolic acknowledgements of real-world actions.</li>
            <li>Blockchain services are decentralized and beyond our direct control; use at your own risk.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            ActiVerse and its affiliates shall not be liable for any damages arising from your use of the Platform, including blockchain-related losses, smart contract bugs, or missed opportunities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modifications</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to update or modify these Terms at any time. Updates will be reflected with the new "Effective Date" above. Continued use of the Platform constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
          <p className="text-gray-600">
            For questions, feedback, or support, please contact:<br />
            📧 <a href="mailto:info@midascreed.com" className="text-emerald-600 hover:text-emerald-700">info@midascreed.com</a>
          </p>
        </section>
      </div>
    </main>
  );
} 