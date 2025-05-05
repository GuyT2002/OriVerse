
export default function TermsOfServicePage() {
  return (
    <div className="container max-w-screen-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose dark:prose-invert max-w-none space-y-4">
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

        <p>Welcome to OriVerse! These Terms of Service ("Terms") govern your use of the OriVerse website located at [Your Website URL] (the "Site") and any related services provided by OriVerse.</p>
        <p>By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Site.</p>

        <h2>Intellectual Property</h2>
        <p>The Site and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of OriVerse and its licensors. The content, including origami designs, tutorials, photographs, and text, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from the content without express written permission.</p>

        <h2>Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on OriVerse's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on OriVerse's website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by OriVerse at any time.</p>

        <h2>Disclaimer</h2>
        <p>The materials on OriVerse's website are provided on an 'as is' basis. OriVerse makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        <p>Further, OriVerse does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>

         <h2>Limitation of Liability</h2>
        <p>In no event shall OriVerse or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OriVerse's website, even if OriVerse or an OriVerse authorized representative has been notified orally or in writing of the possibility of such damage.</p>

        <h2>Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

        <h2>Changes to These Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at: [Your Contact Email]</p>

         <p><em>This is a template Terms of Service. You should consult with a legal professional to ensure it is appropriate for your specific situation and location.</em></p>
      </div>
    </div>
  );
}
