import LegalLayout from './LegalLayout'

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, store, and protect your personal data when you use Wagora."
      effectiveDate="June 22, 2025"
      lastUpdated="June 22, 2025"
    >
      <h2>1. Introduction</h2>
      <p>
        Wagora is an autonomous AI sales agent platform operated by Fortex Forge ("we," "us," or "our"), a creative tech agency registered in Nigeria. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use Wagora at getwagora.com and its associated subdomains.
      </p>
      <p>
        By creating a Wagora account or using any part of our platform, you agree to the practices described in this policy. If you do not agree, do not use the platform.
      </p>
      <p>
        This policy is written in compliance with the Nigeria Data Protection Act (NDPA) 2023, and is designed to meet the standards of the EU General Data Protection Regulation (GDPR) for users in the European Economic Area, and applicable US state privacy laws where relevant.
      </p>

      <h2>2. Who We Are</h2>
      <p><strong>Data Controller:</strong><br />
        Fortex Forge<br />
        Lagos, Nigeria<br />
        Email: <a href="mailto:privacy@getwagora.com">privacy@getwagora.com</a>
      </p>
      <p>For users in the European Economic Area, Fortex Forge acts as the data controller for all personal data processed through the Wagora platform.</p>

      <h2>3. Data We Collect</h2>
      <h3>3.1 Data You Provide Directly</h3>
      <p><strong>Account data:</strong> When you create a Wagora account, we collect your full name, email address, and password (stored as a hashed value — we never store your plain-text password).</p>
      <p><strong>Workspace and brand data:</strong> When you configure a workspace, we collect your brand name, industry, brand voice preference, offer descriptions, ideal client profile settings, and outreach limits.</p>
      <p><strong>Payment details:</strong> To enable invoice generation, we collect your local bank account details (bank name, account number, account name) and international payment details (bank name, SWIFT/BIC code, IBAN) as provided by you. These details are stored securely and used exclusively to populate your invoices. We do not use these details to initiate any payments on your behalf.</p>
      <p><strong>Brand documents:</strong> Documents you upload (offer guides, pricing decks, tone of voice documents, proposals) are stored and used solely to power Wagora's AI outreach and conversation capabilities within your account.</p>
      <p><strong>Billing data:</strong> When you upgrade to a paid plan, payment is processed by Paystack. We do not store your card number, CVV, or full payment credentials. We receive a payment confirmation reference from Paystack only.</p>

      <h3>3.2 Data Collected Automatically</h3>
      <p><strong>Usage data:</strong> We collect information about how you use the platform — pages visited, features used, campaigns created, actions taken, and session duration.</p>
      <p><strong>Technical data:</strong> IP address, browser type, device type, operating system, and referring URL collected automatically when you access the platform.</p>
      <p><strong>Cookies:</strong> We use essential cookies required for authentication and session management, and analytics cookies to understand usage patterns. See our <a href="/legal/cookies">Cookie Policy</a> for full details.</p>

      <h3>3.3 Prospect Data You Process Through Wagora</h3>
      <p>When you use Wagora to run outreach campaigns, the platform collects and stores data about your prospects — including names, email addresses, company names, job titles, social media profiles, and publicly visible business information.</p>
      <p><strong>You are the data controller for your prospect data.</strong> Wagora acts as your data processor. You are responsible for ensuring your use of prospect data complies with applicable laws.</p>

      <h2>4. How We Use Your Data</h2>
      <p><strong>To provide the Wagora service:</strong> Account management, campaign execution, AI-powered outreach and conversation handling, invoice generation, and platform analytics.</p>
      <p><strong>To operate the AI features:</strong> Your brand documents, ICP configuration, and brand voice settings are passed to our AI processing partner (Groq) to generate outreach messages and conversation responses.</p>
      <p><strong>To process payments:</strong> Subscription billing managed through Paystack. Invoice generation using payment details you provide.</p>
      <p><strong>To communicate with you:</strong> Transactional emails (deal notifications, invoice confirmations, security alerts). We do not send marketing emails without your explicit consent.</p>
      <p><strong>To improve the platform:</strong> Aggregated, anonymized usage data used for product development, bug fixing, and feature optimization.</p>
      <p><strong>To enforce our terms:</strong> Detecting and preventing abuse, spam, unauthorized access, and violations of our Acceptable Use Policy.</p>

      <h2>5. Legal Basis for Processing (GDPR)</h2>
      <p>For users in the European Economic Area, we process your data on the following legal bases:</p>
      <ul>
        <li><strong>Contractual necessity:</strong> Processing required to deliver the Wagora service you signed up for</li>
        <li><strong>Legitimate interests:</strong> Platform security, fraud prevention, product improvement</li>
        <li><strong>Legal obligation:</strong> Compliance with applicable laws and regulations</li>
        <li><strong>Consent:</strong> Analytics cookies and marketing communications (where applicable)</li>
      </ul>

      <h2>6. Sub-Processors and Third Parties</h2>
      <table>
        <thead>
          <tr><th>Provider</th><th>Purpose</th><th>Data Shared</th><th>Location</th></tr>
        </thead>
        <tbody>
          <tr><td>Supabase</td><td>Database, authentication, file storage</td><td>All account and workspace data</td><td>US (EU region available)</td></tr>
          <tr><td>Groq</td><td>AI inference (message generation, conversation handling)</td><td>Brand documents, ICP config, conversation content</td><td>US</td></tr>
          <tr><td>Paystack</td><td>Payment processing</td><td>Email address, payment reference</td><td>Nigeria / Global</td></tr>
          <tr><td>Railway</td><td>Backend hosting</td><td>Server logs, request data</td><td>US</td></tr>
          <tr><td>Vercel</td><td>Frontend hosting</td><td>Request logs, IP addresses</td><td>Global CDN</td></tr>
          <tr><td>Resend / Gmail SMTP</td><td>Email delivery</td><td>Prospect email addresses, message content</td><td>US</td></tr>
        </tbody>
      </table>
      <p>We do not sell your data to any third party. We do not allow any third party to use your data for their own marketing purposes.</p>

      <h2>7. Prospect Data and Third-Party Platforms</h2>
      <p>Wagora's outreach engine interacts with LinkedIn and Instagram on your behalf using your connected accounts. You are responsible for complying with LinkedIn's and Instagram's terms of service. Prospect data scraped from these platforms is stored in your Wagora workspace and subject to this Privacy Policy.</p>

      <h2>8. Data Retention</h2>
      <table>
        <thead><tr><th>Data Type</th><th>Retention Period</th></tr></thead>
        <tbody>
          <tr><td>Account data</td><td>Until account deletion + 30 days</td></tr>
          <tr><td>Workspace and campaign data</td><td>Until workspace deletion + 30 days</td></tr>
          <tr><td>Prospect data</td><td>Until manually deleted or account deletion</td></tr>
          <tr><td>Invoice data</td><td>7 years (legal/tax requirement)</td></tr>
          <tr><td>Usage logs</td><td>90 days rolling</td></tr>
          <tr><td>Security logs</td><td>12 months</td></tr>
          <tr><td>Billing records</td><td>7 years</td></tr>
        </tbody>
      </table>

      <h2>9. Your Rights</h2>
      <p>Depending on your location, you have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you.</li>
        <li><strong>Right to rectification:</strong> Request correction of inaccurate or incomplete data.</li>
        <li><strong>Right to erasure:</strong> Request deletion of your personal data (subject to legal retention requirements).</li>
        <li><strong>Right to data portability:</strong> Request your data in a structured, machine-readable format.</li>
        <li><strong>Right to restrict processing:</strong> Request that we limit how we use your data in certain circumstances.</li>
        <li><strong>Right to object:</strong> Object to processing based on legitimate interests.</li>
        <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, you may withdraw it at any time.</li>
        <li><strong>NDPA rights (Nigerian users):</strong> Under the Nigeria Data Protection Act 2023, you have the right to be informed, access your data, correct inaccurate data, delete your data, and lodge a complaint with the Nigeria Data Protection Commission (NDPC).</li>
      </ul>
      <p>To exercise any of these rights, contact us at <a href="mailto:privacy@getwagora.com">privacy@getwagora.com</a>. We will respond within 30 days.</p>

      <h2>10. Data Security</h2>
      <ul>
        <li>All data transmitted between your browser and Wagora is encrypted using TLS 1.2 or higher</li>
        <li>Passwords are hashed using bcrypt — never stored in plain text</li>
        <li>Database access is restricted by row-level security policies</li>
        <li>Payment details are stored with field-level encryption</li>
        <li>Access to production systems is restricted to authorized personnel only</li>
        <li>Regular security reviews of all third-party integrations</li>
      </ul>
      <p>If you believe your account has been compromised, contact <a href="mailto:security@getwagora.com">security@getwagora.com</a> immediately.</p>

      <h2>11. Data Breaches</h2>
      <p>In the event of a data breach that poses a risk to your rights and freedoms, we will notify affected users within 72 hours of becoming aware of the breach, notify the Nigeria Data Protection Commission (NDPC) as required by the NDPA, and provide details of what data was affected and recommended actions.</p>

      <h2>12. Children</h2>
      <p>Wagora is not intended for use by anyone under the age of 18. We do not knowingly collect personal data from minors. If you become aware that a minor has created a Wagora account, contact us at <a href="mailto:privacy@getwagora.com">privacy@getwagora.com</a>.</p>

      <h2>13. International Data Transfers</h2>
      <p>Wagora is operated from Nigeria. Your data may be processed and stored in countries outside Nigeria, including the United States, where our infrastructure providers operate. For transfers from the EEA, we rely on Standard Contractual Clauses (SCCs) approved by the European Commission where applicable.</p>

      <h2>14. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email and display a notice on the platform. Your continued use of Wagora after the effective date of any update constitutes acceptance of the revised policy.</p>

      <h2>15. Contact</h2>
      <p>For privacy-related questions, data requests, or complaints:<br />
        <strong>Email:</strong> <a href="mailto:privacy@getwagora.com">privacy@getwagora.com</a><br />
        <strong>Address:</strong> Fortex Forge, Lagos, Nigeria
      </p>
      <p>For complaints unresolved through our process, Nigerian users may contact the Nigeria Data Protection Commission (NDPC) at <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer">ndpc.gov.ng</a>.</p>

      <p style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-outline-variant)', fontSize: '0.8125rem' }}>
        <em>Wagora Privacy Policy — Version 1.0 · Prepared by Fortex Forge</em>
      </p>
    </LegalLayout>
  )
}
