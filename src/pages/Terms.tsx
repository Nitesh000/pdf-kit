import { SEOHead } from '../components/seo'
import { Card } from '../components/ui'

export function Terms() {
  return (
    <>
      <SEOHead
        title="Terms and Conditions"
        description="Terms and Conditions for using PDF Kit - a free online PDF and image converter tool."
        canonicalUrl="/terms"
      />

      <div className="py-12 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Terms and Conditions
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
            Last updated: January 2025
          </p>

          <Card className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using PDF Kit (accessible at pdf-kit.thecodingant.in), you agree to be
              bound by these Terms and Conditions. If you disagree with any part of these terms,
              you do not have permission to access the service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              PDF Kit is a free web-based tool that provides the following services:
            </p>
            <ul>
              <li>Converting image files (JPG, PNG, GIF, WebP, BMP) to PDF documents</li>
              <li>Converting PDF documents to image files (JPG, PNG, WebP)</li>
              <li>Image compression and quality adjustment</li>
            </ul>
            <p>
              All file processing occurs entirely within your web browser using client-side
              JavaScript. No files are uploaded to or stored on our servers.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>By using PDF Kit, you agree that:</p>
            <ul>
              <li>You will only convert files that you own or have explicit permission to modify</li>
              <li>You will not use the service to convert copyrighted, trademarked, or proprietary
                  content without proper authorization</li>
              <li>You will not use the service for any illegal purpose or in violation of any
                  local, state, national, or international law</li>
              <li>You will not attempt to reverse engineer, decompile, or extract source code
                  from the service beyond what is publicly available</li>
              <li>You will not use automated systems or software to extract data from the service
                  for commercial purposes</li>
            </ul>

            <h2>4. Intellectual Property Rights</h2>
            <p>
              <strong>Your Content:</strong> You retain all ownership rights to the files you process
              using PDF Kit. Since all processing occurs locally in your browser, we never have
              access to, possession of, or any rights to your files.
            </p>
            <p>
              <strong>Our Content:</strong> The PDF Kit service, including its design, code, graphics,
              logos, and user interface, is owned by the operator and protected by copyright and
              other intellectual property laws. You may not copy, modify, distribute, or create
              derivative works based on the service without explicit permission.
            </p>

            <h2>5. Privacy and Data</h2>
            <p>
              PDF Kit is designed with privacy as a core principle:
            </p>
            <ul>
              <li>Files are processed entirely in your browser and are never uploaded to any server</li>
              <li>We do not collect, store, or have access to the content of your files</li>
              <li>We use Google Analytics to collect anonymous usage statistics</li>
              <li>We use Google Ads to display advertisements, which may use cookies</li>
            </ul>
            <p>
              For more details, please refer to our <a href="/privacy">Privacy Policy</a>.
            </p>

            <h2>6. Disclaimer of Warranties</h2>
            <p>
              PDF Kit is provided on an "AS IS" and "AS AVAILABLE" basis without warranties
              of any kind, either express or implied, including but not limited to:
            </p>
            <ul>
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the service will be uninterrupted, timely, secure, or error-free</li>
              <li>Warranties regarding the accuracy or reliability of results obtained from the service</li>
              <li>Warranties that defects in the service will be corrected</li>
            </ul>
            <p>
              You acknowledge that file conversion may not always produce perfect results, and you
              are responsible for verifying the output meets your requirements before use.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, PDF Kit and its operator shall not
              be liable for any indirect, incidental, special, consequential, or punitive damages,
              including but not limited to:
            </p>
            <ul>
              <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
              <li>Damages resulting from your access to or use of (or inability to access or use) the service</li>
              <li>Damages resulting from any content obtained from the service</li>
              <li>Damages resulting from unauthorized access, use, or alteration of your files</li>
            </ul>
            <p>
              In no event shall our total liability exceed the amount you paid to use the service
              (which is zero, as the service is free).
            </p>

            <h2>8. Third-Party Services</h2>
            <p>
              PDF Kit uses third-party services for analytics and advertising:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> For understanding how users interact with the service</li>
              <li><strong>Google Ads:</strong> For displaying advertisements that support the free service</li>
            </ul>
            <p>
              These services have their own terms and privacy policies. By using PDF Kit, you also
              agree to comply with the terms of these third-party services.
            </p>

            <h2>9. Modifications to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue PDF Kit (or any part thereof)
              at any time, with or without notice. We shall not be liable to you or any third party
              for any modification, suspension, or discontinuation of the service.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms and Conditions at any time. Changes will
              be effective immediately upon posting to this page. Your continued use of the service
              after any changes indicates your acceptance of the new terms.
            </p>
            <p>
              We encourage you to review these Terms periodically to stay informed of any updates.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India,
              without regard to its conflict of law provisions. Any disputes arising from these
              Terms or your use of the service shall be subject to the exclusive jurisdiction of
              the courts in India.
            </p>

            <h2>12. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid by a court
              of competent jurisdiction, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall remain in full force
              and effect.
            </p>

            <h2>13. Entire Agreement</h2>
            <p>
              These Terms and Conditions, together with our Privacy Policy, constitute the entire
              agreement between you and PDF Kit regarding your use of the service and supersede
              any prior agreements or understandings.
            </p>

            <h2>14. Contact</h2>
            <p>
              If you have any questions about these Terms and Conditions, you may contact us
              through our social media channels or website.
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}
