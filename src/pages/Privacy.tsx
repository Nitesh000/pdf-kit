import { SEOHead } from '../components/seo'
import { Card } from '../components/ui'

export function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Read our privacy policy. Learn how we protect your data with 100% client-side processing - your files never leave your browser."
        canonicalUrl="/privacy"
      />

      <div className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Privacy Policy
          </h1>

          <Card className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: January 2025</p>

            <h2>Overview</h2>
            <p>
              At PDF Kit, we take your privacy seriously. Our service is designed with
              privacy as a core principle - all file processing happens entirely in your browser.
            </p>

            <h2>File Processing</h2>
            <p>
              <strong>Your files never leave your device.</strong> All conversion and processing
              is performed locally using your browser's capabilities. We do not:
            </p>
            <ul>
              <li>Upload your files to any server</li>
              <li>Store your files anywhere</li>
              <li>Have access to the content of your files</li>
              <li>Share your files with third parties</li>
            </ul>

            <h2>Data We Collect</h2>
            <p>
              While we don't process your files on our servers, we do collect some anonymous
              data to improve our service:
            </p>
            <ul>
              <li>
                <strong>Analytics:</strong> We use Google Analytics to understand how visitors
                use our site. This includes page views, time on site, and general usage patterns.
                This data is anonymized and cannot be linked to you personally.
              </li>
              <li>
                <strong>Advertising:</strong> We use Google Ads to display advertisements.
                Google may use cookies to serve ads based on your prior visits to our site or
                other sites.
              </li>
            </ul>

            <h2>Cookies</h2>
            <p>We use cookies for:</p>
            <ul>
              <li>Analytics (Google Analytics)</li>
              <li>Advertising (Google Ads)</li>
              <li>Essential site functionality (dark mode preference)</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Disabling cookies may
              affect some site functionality.
            </p>

            <h2>Third-Party Services</h2>
            <p>Our site uses the following third-party services:</p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> For understanding site usage.{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Google's Privacy Policy
                </a>
              </li>
              <li>
                <strong>Google Ads:</strong> For displaying advertisements.{' '}
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                  How Google uses data
                </a>
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              Since files are processed locally in your browser, there is no risk of data
              breach from our servers. Your files remain on your device at all times.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our service is not directed to children under 13. We do not knowingly collect
              personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any
              changes by posting the new policy on this page.
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}
