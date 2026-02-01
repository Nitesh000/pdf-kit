import { SEOHead } from '../components/seo'
import { Card } from '../components/ui'

const steps = [
  {
    title: 'Select Your Files',
    description: 'Drag and drop your files into the converter or click to browse. We support all common image formats (JPG, PNG, GIF, WebP) and PDF files.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    title: 'Configure Settings',
    description: 'Choose your output format, quality settings, and page options. High quality preserves detail while low quality creates smaller files.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Browser Processing',
    description: 'Your files are processed entirely in your browser using advanced algorithms. Nothing is uploaded to any server - your files stay private.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Download Results',
    description: 'Once conversion is complete, download your files instantly. Multiple files are automatically packaged into a convenient ZIP archive.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
]

const techDetails = [
  {
    title: 'Image to PDF',
    items: [
      'Images are optionally compressed using browser-image-compression',
      'jsPDF library creates the PDF document',
      'Images are embedded as base64 data',
      'Page layout is calculated to fit images properly',
    ],
  },
  {
    title: 'PDF to Image',
    items: [
      'PDF.js renders each page to a canvas element',
      'Canvas is exported as JPG, PNG, or WebP',
      'Quality and scale settings control output size',
      'Multiple images are zipped using JSZip',
    ],
  },
]

export function HowItWorks() {
  return (
    <>
      <SEOHead
        title="How It Works"
        description="Learn how our PDF converter works. 100% client-side processing means your files never leave your browser. Fast, secure, and private."
        canonicalUrl="/how-it-works"
      />

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h1>
            <p className="text-lg text-gray-600">
              Our converter processes files entirely in your browser for maximum privacy and speed.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8 mb-16">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-primary-600">Step {index + 1}</span>
                    <h2 className="text-xl font-semibold text-gray-900">{step.title}</h2>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Technical Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {techDetails.map((detail) => (
                <Card key={detail.title}>
                  <h3 className="font-semibold text-gray-900 mb-4">{detail.title}</h3>
                  <ul className="space-y-2">
                    {detail.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Security Note */}
          <Card className="mt-8 bg-green-50 border-green-200">
            <div className="flex gap-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Your Privacy is Protected</h3>
                <p className="text-green-700 text-sm">
                  All file processing happens locally in your browser. Your files are never uploaded
                  to our servers or any third-party service. When you close the page, all data is
                  automatically cleared from memory.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
