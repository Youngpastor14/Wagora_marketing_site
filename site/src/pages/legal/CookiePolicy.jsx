import LegalLayout from './LegalLayout'

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="How Wagora uses cookies and similar technologies on getwagora.com and app.getwagora.com."
      effectiveDate="June 22, 2025"
      lastUpdated="June 22, 2025"
    >
      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They allow the website to remember information about your visit — such as your login state, preferences, and usage patterns — across sessions.
      </p>
      <p>
        Wagora uses cookies and similar technologies (including local storage and session storage) on getwagora.com and app.getwagora.com to make the platform function correctly and to understand how it is being used.
      </p>

      <h2>2. Types of Cookies We Use</h2>
      <h3>2.1 Strictly Necessary Cookies</h3>
      <p>These cookies are required for the platform to function. They cannot be disabled. Without them, core features like authentication and session management will not work.</p>
      <table>
        <thead><tr><th>Cookie</th><th>Purpose</th><th>Duration</th></tr></thead>
        <tbody>
          <tr><td>sb-access-token</td><td>Supabase authentication token — keeps you logged in</td><td>Session</td></tr>
          <tr><td>sb-refresh-token</td><td>Supabase session refresh token</td><td>7 days</td></tr>
          <tr><td>wagora-theme</td><td>Stores your light/dark mode preference</td><td>1 year</td></tr>
          <tr><td>wagora-session</td><td>Platform session identifier</td><td>Session</td></tr>
        </tbody>
      </table>

      <h3>2.2 Functional Cookies</h3>
      <p>These cookies remember your preferences and improve your experience. They are not strictly necessary but enhance usability.</p>
      <table>
        <thead><tr><th>Cookie</th><th>Purpose</th><th>Duration</th></tr></thead>
        <tbody>
          <tr><td>wagora-workspace</td><td>Stores your last active workspace selection</td><td>30 days</td></tr>
          <tr><td>wagora-onboarding</td><td>Tracks onboarding completion state</td><td>30 days</td></tr>
        </tbody>
      </table>

      <h3>2.3 Analytics Cookies</h3>
      <p>These cookies help us understand how users interact with Wagora so we can improve the product. All analytics data is aggregated and anonymized — we do not track individual users for advertising purposes.</p>
      <table>
        <thead><tr><th>Cookie</th><th>Purpose</th><th>Duration</th></tr></thead>
        <tbody>
          <tr><td>_ga</td><td>Google Analytics — distinguishes users</td><td>2 years</td></tr>
          <tr><td>_ga_*</td><td>Google Analytics — stores session state</td><td>2 years</td></tr>
        </tbody>
      </table>
      <p>We use analytics data exclusively for product improvement. We do not share analytics data with advertisers or data brokers.</p>

      <h3>2.4 Cookies We Do Not Use</h3>
      <p>Wagora does not use:</p>
      <ul>
        <li>Advertising or targeting cookies</li>
        <li>Third-party tracking cookies for retargeting</li>
        <li>Cookies that track your activity across other websites</li>
        <li>Social media tracking pixels</li>
      </ul>

      <h2>3. Similar Technologies</h2>
      <p><strong>Local storage:</strong> Used to persist UI state (sidebar collapse state, table column preferences) between sessions. This data stays on your device and is never transmitted to our servers.</p>
      <p><strong>Session storage:</strong> Used for temporary state during active sessions (multi-step form progress). Cleared when you close your browser tab.</p>

      <h2>4. Your Cookie Choices</h2>
      <h3>4.1 Cookie Consent</h3>
      <p>When you first visit getwagora.com, you will be presented with a cookie consent banner. Strictly necessary cookies are active by default. Analytics cookies require your consent.</p>

      <h3>4.2 Managing Cookies in Your Browser</h3>
      <p>You can control cookies through your browser settings:</p>
      <ul>
        <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
        <li><strong>Firefox:</strong> Settings → Privacy and Security → Cookies and Site Data</li>
        <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
        <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
      </ul>
      <p>Please note that disabling strictly necessary cookies will prevent Wagora from functioning correctly.</p>

      <h3>4.3 Opting Out of Analytics</h3>
      <p>To opt out of Google Analytics across all websites, you can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>

      <h2>5. Third-Party Cookies</h2>
      <table>
        <thead><tr><th>Service</th><th>Purpose</th><th>Their Policy</th></tr></thead>
        <tbody>
          <tr><td>Supabase</td><td>Authentication</td><td><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a></td></tr>
          <tr><td>Google Analytics</td><td>Usage analytics</td><td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></td></tr>
          <tr><td>Paystack</td><td>Payment processing (billing pages only)</td><td><a href="https://paystack.com/privacy" target="_blank" rel="noopener noreferrer">paystack.com/privacy</a></td></tr>
        </tbody>
      </table>

      <h2>6. Updates to This Policy</h2>
      <p>We may update this Cookie Policy when we add new features or integrate new services that use cookies. Material changes will be communicated via the cookie consent banner on your next visit.</p>

      <h2>7. Contact</h2>
      <p>Questions about our use of cookies:<br />
        <strong>Email:</strong> <a href="mailto:privacy@getwagora.com">privacy@getwagora.com</a><br />
        <strong>Address:</strong> Fortex Forge, Lagos, Nigeria
      </p>

      <p style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-outline-variant)', fontSize: '0.8125rem' }}>
        <em>Wagora Cookie Policy — Version 1.0 · Prepared by Fortex Forge</em>
      </p>
    </LegalLayout>
  )
}
