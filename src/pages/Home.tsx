import { Link } from 'react-router-dom'
import { SEOHead, WebApplicationSchema } from '../components/seo'
import { Card } from '../components/ui'
import { AdBanner } from '../components/ads'

const converters = [
  {
    title: 'Image to PDF',
    description: 'Convert JPG, PNG, and other images to PDF documents',
    path: '/image-to-pdf',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'PDF to Image',
    description: 'Convert PDF pages to JPG, PNG, or WebP images',
    path: '/pdf-to-image',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

const features = [
  {
    title: '100% Client-Side',
    description: 'Your files never leave your browser. All processing happens locally.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Free to Use',
    description: 'No sign-up required. Convert as many files as you need.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Quality Options',
    description: 'Choose between high quality or smaller file sizes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Batch Processing',
    description: 'Convert multiple files at once and download as ZIP.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
]

export function Home() {
  return (
    <>
      <SEOHead
        title="Free Online PDF & Image Converter"
        description="Convert images to PDF and PDF to images for free. 100% client-side processing - your files never leave your browser. Supports JPG, PNG, WebP, and more."
        keywords="pdf converter, image to pdf, pdf to image, jpg to pdf, png to pdf, pdf to jpg, free online converter"
        canonicalUrl="/"
      />
      <WebApplicationSchema
        name="PDF Kit"
        description="Free online tool to convert images to PDF and PDF to images"
        url="/"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Free PDF & Image Converter
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Convert images to PDF and PDF to images instantly. 100% free, no sign-up required,
              and your files never leave your browser.
            </p>
          </div>

          <AdBanner position="top" />

          {/* Converter Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            {converters.map((converter) => (
              <Link key={converter.path} to={converter.path}>
                <Card className="h-full hover:shadow-lg dark:hover:shadow-primary-500/10 transition-shadow cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-lg group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-colors">
                      {converter.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {converter.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">{converter.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose PDF Kit?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdBanner position="bottom" />

      {/* Quick Links */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Popular Conversions
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { path: '/jpg-to-pdf', label: 'JPG to PDF' },
              { path: '/png-to-pdf', label: 'PNG to PDF' },
              { path: '/pdf-to-jpg', label: 'PDF to JPG' },
              { path: '/pdf-to-png', label: 'PDF to PNG' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-6 py-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
