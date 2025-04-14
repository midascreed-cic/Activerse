import React from 'react';

export function Privacy() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-emerald max-w-none">
        <p className="text-lg text-gray-600 mb-8">Effective Date: March 14, 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            ActiVerse is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform for discovering and participating in social impact events in Malawi and beyond.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Information You Provide</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Event Registration: When organizing events, you may provide event details, location, and contact information.</li>
            <li>Wallet Address: When connecting your Web3 wallet to claim NFTs (pseudonymous identifier).</li>
            <li>Communication: Email correspondence for support or inquiries.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Automatically Collected Information</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Usage Data: Basic analytics about how you interact with our platform.</li>
            <li>Device Information: Browser type, operating system, and device type.</li>
            <li>Blockchain Data: Public transaction data related to NFT claims (inherently public due to blockchain nature).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>To facilitate event discovery and participation</li>
            <li>To issue and verify impact NFTs</li>
            <li>To maintain and improve our platform</li>
            <li>To communicate important updates about events or the platform</li>
            <li>To analyze platform usage and optimize user experience</li>
            <li>To prevent fraud and ensure platform security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage and Security</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>We implement industry-standard security measures to protect your information</li>
            <li>Event data is stored securely in our database</li>
            <li>NFT-related data is stored on the blockchain and is publicly accessible</li>
            <li>We do not store private keys or wallet credentials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Blockchain Transparency</h2>
          <p className="text-gray-600 mb-4">
            Due to the nature of blockchain technology, certain information such as wallet addresses and NFT claims are publicly visible. This transparency is an intentional feature that ensures the authenticity and verifiability of impact claims.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Sharing</h2>
          <p className="text-gray-600 mb-4">We do not sell your personal information. We may share data:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>With event organizers (only relevant event participation data)</li>
            <li>With service providers who assist in platform operations</li>
            <li>When required by law or to protect our rights</li>
            <li>With your consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking</h2>
          <p className="text-gray-600 mb-4">
            We use essential cookies for platform functionality and analytics cookies to understand usage patterns. We do not use cookies for advertising or tracking across other websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information (where applicable)</li>
            <li>Opt-out of non-essential communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
          <p className="text-gray-600 mb-4">
            Our platform is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Effective Date."
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at:<br />
            📧 <a href="mailto:info@midascreed.com" className="text-emerald-600 hover:text-emerald-700">info@midascreed.com</a>
          </p>
        </section>
      </div>
    </main>
  );
} 