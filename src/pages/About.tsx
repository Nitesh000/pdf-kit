import { SEOHead } from '../components/seo'
import { Card } from '../components/ui'

export function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about PDF Kit - our free PDF and image converter tool. 100% client-side processing ensures your files never leave your browser."
        canonicalUrl="/about"
      />

      <div className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About PDF Kit
          </h1>

          <Card className="prose prose-gray dark:prose-invert max-w-none">
            <h2>Our Mission</h2>
            <p>
              We believe file conversion should be free, fast, and secure. That's why we built
              PDF Kit - a tool that processes all your files locally in your browser,
              without uploading anything to servers.
            </p>

            <h2>Why We're Different</h2>
            <p>
              Most online converters upload your files to remote servers for processing.
              This raises privacy concerns and can be slow for large files. Our approach is different:
            </p>
            <ul>
              <li>
                <strong>100% Client-Side:</strong> All processing happens in your browser using
                modern web technologies. Your files never leave your device.
              </li>
              <li>
                <strong>No Registration:</strong> Start converting immediately. No account needed,
                no personal information required.
              </li>
              <li>
                <strong>No File Limits:</strong> Convert as many files as you need. The only limit
                is your device's memory.
              </li>
              <li>
                <strong>Free Forever:</strong> We're supported by non-intrusive ads, so the service
                remains free for everyone.
              </li>
            </ul>

            <h2>Technology</h2>
            <p>
              We use cutting-edge browser technologies including:
            </p>
            <ul>
              <li>PDF.js for rendering PDF documents</li>
              <li>jsPDF for creating PDF files</li>
              <li>Web Workers for background processing</li>
              <li>Modern image compression algorithms</li>
            </ul>

            <h2>Feedback</h2>
            <p>
              We're always looking to improve PDF Kit. If you have suggestions or encounter
              any issues, we'd love to hear from you through our social media channels.
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}
