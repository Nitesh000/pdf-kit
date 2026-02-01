import { SEOHead } from '../components/seo'
import { Card } from '../components/ui'

export function Terms() {
  return (
    <>
      <SEOHead
        title="Terms of Service"
        description="Read our terms of service for using PDF Kit. Free online tool for converting images and PDFs."
        canonicalUrl="/terms"
      />

      <div className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Terms of Service
          </h1>

          <Card className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: January 2025</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using PDF Kit ("the Service"), you accept and agree to be
              bound by these Terms of Service. If you do not agree to these terms, please do
              not use the Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              PDF Kit is a free online tool that allows you to convert images to PDF
              documents and PDF documents to images. All processing is performed locally in
              your web browser.
            </p>

            <h2>3. Use of Service</h2>
            <p>You agree to use the Service only for lawful purposes. You may not:</p>
            <ul>
              <li>Use the Service to convert copyrighted material without authorization</li>
              <li>Attempt to disrupt or interfere with the Service</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Remove any copyright or proprietary notices from the Service</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by
              PDF Kit and are protected by international copyright, trademark, and other
              intellectual property laws.
            </p>

            <h2>5. User Content</h2>
            <p>
              You retain all rights to the files you process using the Service. Since all
              processing occurs locally in your browser, we never have access to or ownership
              of your files.
            </p>

            <h2>6. Disclaimer of Warranties</h2>
            <p>
              The Service is provided "as is" without warranties of any kind. We do not
              guarantee that:
            </p>
            <ul>
              <li>The Service will be uninterrupted or error-free</li>
              <li>The results will meet your requirements</li>
              <li>The Service will be compatible with all devices or browsers</li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall PDF Kit be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of or inability to
              use the Service.
            </p>

            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless PDF Kit from any claims, damages,
              or expenses arising from your use of the Service or violation of these Terms.
            </p>

            <h2>9. Modifications to Service</h2>
            <p>
              We reserve the right to modify or discontinue the Service at any time without
              notice. We shall not be liable to you or any third party for any modification,
              suspension, or discontinuance of the Service.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We may revise these Terms at any time. By continuing to use the Service after
              changes become effective, you agree to be bound by the revised Terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of
              the jurisdiction in which PDF Kit operates, without regard to its conflict
              of law provisions.
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}
