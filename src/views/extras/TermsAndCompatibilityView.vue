<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <section class="terms-and-compatibility">
    <h1 class="title">Terms and Conditions & Compatibility</h1>

    <p class="intro">
      By using Rently's platform, you agree to the following terms and conditions. Please read them
      carefully. This document also outlines the compatibility requirements for using our services.
    </p>

    <h2>1. Acceptance of Terms</h2>
    <p>
      By accessing or using Rently, you agree to be bound by these terms and conditions. If you do
      not agree to these terms, you may not use our platform. We reserve the right to update or
      change these terms at any time.
    </p>

    <h2>2. Services Provided</h2>
    <p>
      Rently offers a platform for renting and letting users rent items. This includes the ability
      to list rental items, browse available listings, communicate with other users, and process
      payments through our integrated payment system.
    </p>

    <h2>3. Eligibility</h2>
    <p>
      To use Rently, you must be at least 18 years of age and have the legal capacity to enter into
      a binding contract.
    </p>

    <h2>4. User Responsibilities</h2>
    <ul class="info-list">
      <li>Ensure all rental listings are accurate and comply with applicable laws.</li>
      <li>Do not engage in fraudulent or illegal activities through our platform.</li>
      <li>Respect the privacy and property of other users.</li>
      <li>Keep your account details secure and confidential.</li>
    </ul>

    <h2>5. Payment Terms</h2>
    <p>
      All payments for rental transactions are processed through Rently’s secure payment gateway. By
      completing a transaction, you agree to pay the specified amount for the rental item.
    </p>

    <h2>6. Refund and Cancellation Policy</h2>
    <p>
      Renters and listers should agree on cancellation terms before finalizing any rental
      transaction. Refunds are subject to Rently’s discretion and specific terms outlined at the
      time of the transaction.
    </p>

    <h2>7. Compatibility Requirements</h2>
    <p>
      To use Rently’s platform effectively, you must meet the following compatibility requirements:
    </p>
    <ul class="info-list">
      <li>Use a modern web browser such as Chrome, Firefox, Safari, or Edge.</li>
      <li>
        Ensure that your device has a stable internet connection for smooth browsing and
        transactions.
      </li>
      <li>Enable JavaScript and cookies for full functionality of the site.</li>
      <li>
        For mobile users, the Rently app is available for iOS and Android devices (requires iOS
        11.0+ or Android 5.0+).
      </li>
    </ul>

    <h2>8. User Content</h2>
    <p>
      You are responsible for any content you upload or post on Rently, including descriptions,
      photos, and other media. By posting content, you grant Rently a license to use, display, and
      share the content in connection with our services.
    </p>

    <h2>9. Termination</h2>
    <p>
      We reserve the right to suspend or terminate your account if you violate these terms or engage
      in any activity that threatens the integrity and security of the platform.
    </p>

    <h2>10. Limitation of Liability</h2>
    <p>
      Rently will not be liable for any indirect, incidental, or consequential damages resulting
      from the use of our platform. You use the platform at your own risk.
    </p>

    <h2>11. Dispute Resolution</h2>
    <p>
      Any disputes arising from these terms will be resolved through binding arbitration, according
      to the laws of the jurisdiction where Rently operates.
    </p>

    <h2>12. Changes to Terms</h2>
    <p>
      We may modify these terms at any time. Any updates will be posted on this page, and the
      "Effective Date" at the top will be updated accordingly.
    </p>

    <h2>13. Contact Us</h2>
    <p class="closing">
      If you have any questions about our Terms and Conditions or Compatibility requirements, please
      contact us at <RouterLink to="mailto:contact@rently.com">contact@rently.com</RouterLink>.
    </p>

    <RouterLink to="/" class="btn">Back to Home</RouterLink>
  </section>
</template>

<style scoped>
.terms-and-compatibility {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-family: var(--font-headings);
}

.message {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: var(--font-basic);
}

.info-list {
  margin-left: 2rem;
  font-family: var(--font-basic);
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: var(--font-basic);
}

h2,
p {
  font-family: var(--font-basic);
}

.closing {
  margin-bottom: 2rem;
}
.btn {
  width: 10rem;
}
</style>
