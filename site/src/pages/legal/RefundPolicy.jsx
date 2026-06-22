import LegalLayout from './LegalLayout'

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="When and how Fortex Forge issues refunds for Wagora subscriptions."
      effectiveDate="June 22, 2025"
      lastUpdated="June 22, 2025"
    >
      <h2>1. Overview</h2>
      <p>
        This Refund Policy explains when and how Fortex Forge issues refunds for Wagora subscriptions. We want every user to feel confident in their decision to upgrade to a paid plan. At the same time, we have built a product that delivers real value from day one, and our refund policy reflects that.
      </p>

      <h2>2. Free Plan</h2>
      <p>The Wagora free plan is available at no cost. There is nothing to refund on a free account.</p>

      <h2>3. Paid Subscriptions — General Policy</h2>
      <p>Wagora subscription fees are charged monthly in advance. As a general rule, we do not issue refunds for:</p>
      <ul>
        <li>Partial months of service</li>
        <li>Unused features within your plan</li>
        <li>Downgrading from a higher plan to a lower plan mid-cycle</li>
        <li>Accounts suspended or terminated for violations of our Terms of Service or Acceptable Use Policy</li>
      </ul>

      <h2>4. New Subscriber Refund Window</h2>
      <p>
        If you upgrade to a paid Wagora plan for the first time and are not satisfied with the service, you may request a full refund within <strong>7 days</strong> of your initial payment, provided that:
      </p>
      <ul>
        <li>This is your first paid subscription on your account</li>
        <li>You have not sent more than 50 outreach messages through the platform</li>
        <li>You have not generated more than 3 invoices</li>
        <li>You submit your refund request to <a href="mailto:billing@getwagora.com">billing@getwagora.com</a> within the 7-day window</li>
      </ul>
      <p>Refunds outside of these conditions are at our discretion and evaluated case by case.</p>

      <h2>5. Refund Request Process</h2>
      <p>To request a refund:</p>
      <ol>
        <li>Email <a href="mailto:billing@getwagora.com">billing@getwagora.com</a> with the subject line: <strong>"Refund Request — [your registered email]"</strong></li>
        <li>Include your account email address and the reason for your request</li>
        <li>We will review your request within 3 business days</li>
        <li>If approved, the refund will be processed through Paystack back to your original payment method within 5–10 business days, depending on your bank</li>
      </ol>

      <h2>6. Service Outages and Failures</h2>
      <p>
        If Wagora experiences a significant service outage or technical failure that prevents you from using the platform for an extended period, we may issue a pro-rated credit or partial refund at our discretion. Significant outage is defined as platform unavailability exceeding 24 continuous hours in a single calendar month.
      </p>
      <p>To report an outage-related refund request, contact <a href="mailto:billing@getwagora.com">billing@getwagora.com</a> with documentation of the dates and impact.</p>

      <h2>7. Annual Plans</h2>
      <p>If and when Wagora introduces annual billing options, annual plans will have their own refund terms which will be stated clearly at the point of purchase.</p>

      <h2>8. Chargebacks</h2>
      <p>
        If you initiate a chargeback with your bank or card provider without first contacting us, we reserve the right to suspend your account pending resolution. We encourage you to contact us directly at <a href="mailto:billing@getwagora.com">billing@getwagora.com</a> before taking any payment dispute action — in most cases, we can resolve the issue faster than a formal chargeback process.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>We may update this Refund Policy from time to time. Changes will be communicated via email and platform notice. The policy in effect at the time of your payment applies to that payment.</p>

      <h2>10. Contact</h2>
      <p>
        For refund questions or requests:<br />
        <strong>Email:</strong> <a href="mailto:billing@getwagora.com">billing@getwagora.com</a><br />
        <strong>Response time:</strong> Within 3 business days<br />
        <strong>Address:</strong> Fortex Forge, Lagos, Nigeria
      </p>

      <p style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-outline-variant)', fontSize: '0.8125rem' }}>
        <em>Wagora Refund Policy — Version 1.0 · Prepared by Fortex Forge</em>
      </p>
    </LegalLayout>
  )
}
