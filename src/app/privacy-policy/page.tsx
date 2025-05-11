
import { CurrentDate } from '@/components/current-date';

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-screen-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
        <p><strong>Last Updated: <CurrentDate /></strong></p>

        <p>Welcome to OriVerse! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL]. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

        <h2>Collection of Your Information</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
        <ul>
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, that you voluntarily give to us when you register for the newsletter or use the contact form.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.</li>
          {/* Add more sections like Cookies, Use of Information, Disclosure, Security, etc. */}
        </ul>

         <h2>Use of Your Information</h2>
         <p>Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
         <ul>
            <li>Send you a newsletter.</li>
            <li>Respond to your comments and inquiries.</li>
            <li>Improve the website and user experience.</li>
            <li>Monitor and analyze usage and trends.</li>
         </ul>


        <h2>Security of Your Information</h2>
        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

        <h2>Policy for Children</h2>
        <p>We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.</p>

        <h2>Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at: contact@oriverse.com</p>

        <p><em>This is a template privacy policy. You should consult with a legal professional to ensure it meets all legal requirements for your specific situation and location.</em></p>
      </div>
    </div>
  );
}
