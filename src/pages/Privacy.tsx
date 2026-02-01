import { SEOHead } from '../components/seo'
import { Card } from '../components/ui'

export function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy Policy for PDF Kit. Learn how we protect your data - all file processing happens locally in your browser."
        canonicalUrl="/privacy"
      />

      <div className="py-12 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Privacy Policy
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
            Last updated: January 2025
          </p>

          {/* Privacy Highlight */}
          <Card className="bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/30 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 dark:bg-green-500/20 rounded-lg">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-1">
                  Your Files Stay Private
                </h3>
                <p className="text-sm text-green-700 dark:text-green-400">
                  All file processing happens locally in your browser. Your files are never uploaded
                  to any server - they never leave your device.
                </p>
              </div>
            </div>
          </Card>

          <Card className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Overview</h2>
            <p>
              PDF Kit ("we", "our", or "the service") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard information when you use
              our website at pdf-kit.thecodingant.in.
            </p>

            <h2>2. Information We Do NOT Collect</h2>
            <p>
              Unlike most online tools, PDF Kit does not collect or have access to:
            </p>
            <ul>
              <li><strong>Your files:</strong> Images and PDFs you convert are processed entirely
                  in your browser using JavaScript. They are never uploaded to our servers.</li>
              <li><strong>File contents:</strong> We cannot see, access, or store any content from
                  your documents.</li>
              <li><strong>Personal information:</strong> We don't require registration, so we don't
                  collect names, emails, or other personal details.</li>
              <li><strong>Conversion history:</strong> We don't track or store records of your
                  conversions.</li>
            </ul>

            <h2>3. Information We DO Collect</h2>
            <p>
              We collect limited, anonymous data to improve the service:
            </p>

            <h3>3.1 Analytics Data (Google Analytics)</h3>
            <p>We use Google Analytics to understand how visitors use our site. This includes:</p>
            <ul>
              <li>Pages visited and time spent on pages</li>
              <li>Referral sources (how you found our site)</li>
              <li>General geographic location (country/city level, not precise)</li>
              <li>Device type, browser, and operating system</li>
              <li>Screen resolution</li>
            </ul>
            <p>
              This data is anonymized and aggregated. It cannot be used to identify you personally.
            </p>

            <h3>3.2 Advertising Data (Google Ads)</h3>
            <p>
              We display advertisements through Google Ads to support the free service. Google may:
            </p>
            <ul>
              <li>Use cookies to serve ads based on your prior visits to our site or other sites</li>
              <li>Collect data about ad interactions (clicks, impressions)</li>
              <li>Use this information to show you relevant advertisements</li>
            </ul>
            <p>
              You can opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Google's Ad Settings
              </a>.
            </p>

            <h2>4. Cookies</h2>
            <p>PDF Kit and our third-party services use cookies for:</p>
            <ul>
              <li><strong>Essential functionality:</strong> Remembering your dark mode preference</li>
              <li><strong>Analytics:</strong> Google Analytics cookies to understand site usage</li>
              <li><strong>Advertising:</strong> Google Ads cookies for relevant advertisements</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Blocking cookies may affect
              some functionality but will not prevent file conversion from working.
            </p>

            <h2>5. Local Storage</h2>
            <p>
              We use your browser's local storage to save preferences like dark mode settings.
              This data stays on your device and is never transmitted to us.
            </p>

            <h2>6. Data Security</h2>
            <p>
              Because your files are processed locally and never uploaded:
            </p>
            <ul>
              <li>There is no risk of your files being intercepted during upload</li>
              <li>There is no risk of data breach exposing your files</li>
              <li>When you close the browser tab, your files are removed from memory</li>
            </ul>
            <p>
              The website is served over HTTPS to ensure secure communication.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for
              the privacy practices of these external sites. We encourage you to review their
              privacy policies.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              PDF Kit is not directed at children under 13 years of age. We do not knowingly
              collect personal information from children. If you believe a child has provided
              us with personal information, please contact us.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on
              this page with an updated "Last updated" date. Your continued use of the service
              after changes indicates acceptance of the updated policy.
            </p>

            <h2>10. Your Rights</h2>
            <p>
              Since we don't collect personal data, there's minimal data to manage. However,
              you can:
            </p>
            <ul>
              <li>Clear your browser cookies and local storage at any time</li>
              <li>Use browser settings or extensions to block analytics and advertising</li>
              <li>Opt out of Google's personalized advertising</li>
            </ul>

            <h2>11. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, you can reach out through our
              social media channels or the website.
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}
