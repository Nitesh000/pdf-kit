import { SEOHead } from '../components/seo'
import { Card } from '../components/ui'

export function About() {
  return (
    <>
      <SEOHead
        title="About"
        description="PDF Kit is a free, privacy-focused PDF and image converter. Built by a developer who believes file conversion should be simple, fast, and secure."
        canonicalUrl="/about"
      />

      <div className="py-12 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About PDF Kit
          </h1>

          <div className="space-y-6">
            <Card className="prose prose-gray dark:prose-invert max-w-none">
              <h2>The Story</h2>
              <p>
                PDF Kit was born out of frustration. Every time I needed to convert an image to PDF
                or extract images from a PDF, I'd find myself on sketchy websites that either:
              </p>
              <ul>
                <li>Required me to upload my files to their servers (privacy concern)</li>
                <li>Bombarded me with intrusive ads and pop-ups</li>
                <li>Limited conversions unless I signed up or paid</li>
                <li>Took forever because of server-side processing</li>
              </ul>
              <p>
                So I built PDF Kit - a tool that does everything in your browser. Your files never
                leave your device, conversions are instant, and it's completely free to use.
              </p>
            </Card>

            <Card className="prose prose-gray dark:prose-invert max-w-none">
              <h2>How It Works</h2>
              <p>
                PDF Kit uses modern browser technologies to process files entirely on your device:
              </p>
              <ul>
                <li><strong>PDF.js</strong> - Mozilla's PDF rendering library for reading PDFs</li>
                <li><strong>jsPDF</strong> - For creating PDF documents from images</li>
                <li><strong>Canvas API</strong> - For image manipulation and format conversion</li>
                <li><strong>Web Workers</strong> - For background processing without freezing your browser</li>
              </ul>
              <p>
                This means your files are processed using your computer's resources, not some remote server.
                When you close the tab, everything is gone - no traces left behind.
              </p>
            </Card>

            <Card className="prose prose-gray dark:prose-invert max-w-none">
              <h2>Privacy First</h2>
              <p>
                I take privacy seriously. Here's what PDF Kit does NOT do:
              </p>
              <ul>
                <li>Upload your files anywhere</li>
                <li>Store your files or conversion history</li>
                <li>Track what files you convert</li>
                <li>Require registration or personal information</li>
              </ul>
              <p>
                The only data collected is anonymous analytics (page views, general usage patterns)
                to help improve the service. That's it.
              </p>
            </Card>

            <Card className="prose prose-gray dark:prose-invert max-w-none">
              <h2>Supporting the Project</h2>
              <p>
                PDF Kit is free and will always be free. The project is supported by non-intrusive
                advertisements. If you find the tool useful, simply using it helps keep it running!
              </p>
              <p>
                If you encounter any bugs or have feature suggestions, feel free to reach out through
                social media or leave feedback. I'm always looking to improve the tool.
              </p>
            </Card>

            <Card className="bg-primary-50 dark:bg-primary-500/10 border-primary-200 dark:border-primary-500/30">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-500/20 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Built with Modern Tech</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React, TypeScript, Tailwind CSS, Vite, and lots of coffee. Open source libraries
                    make this possible - thanks to all the maintainers out there.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
