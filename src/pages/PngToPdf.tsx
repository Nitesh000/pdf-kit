import { SEOHead, HowToSchema, FAQSchema } from '../components/seo'
import { Card, Button } from '../components/ui'
import { AdBanner } from '../components/ads'
import { ImageDropzone, PreviewList, PdfSettings } from '../components/converter/ImageToPdf'
import { ProgressBar } from '../components/converter/shared'
import { useImageToPdf } from '../hooks'

const howToSteps = [
  { name: 'Select PNG Files', text: 'Click the upload area or drag and drop your PNG images.' },
  { name: 'Arrange Order', text: 'Reorder images to set the page order in your PDF.' },
  { name: 'Choose Settings', text: 'Select page size (A4, Letter) and quality level.' },
  { name: 'Download PDF', text: 'Click Convert and download your new PDF document.' },
]

const faqs = [
  {
    question: 'How do I convert PNG to PDF?',
    answer: 'Upload your PNG images, arrange them in order, select your settings, and click Convert. Your PDF will be generated instantly in your browser.',
  },
  {
    question: 'Will PNG transparency be preserved in PDF?',
    answer: 'PNG images with transparency will be converted with a white background in the PDF, as PDF does not support the same transparency as PNG.',
  },
  {
    question: 'Can I convert multiple PNG files to one PDF?',
    answer: 'Yes, you can upload multiple PNG images and combine them into a single PDF document. Each image becomes a page in the PDF.',
  },
  {
    question: 'Is the PNG to PDF conversion free?',
    answer: 'Yes, our converter is completely free to use with no limits on the number of conversions. No registration or payment required.',
  },
]

export function PngToPdf() {
  const {
    files,
    isConverting,
    progress,
    pageSize,
    quality,
    addFiles,
    removeFile,
    reorderFiles,
    clearFiles,
    setPageSize,
    setQuality,
    convert,
  } = useImageToPdf()

  const handleAddFiles = (newFiles: File[]) => {
    const pngFiles = newFiles.filter(
      (f) => f.type === 'image/png' || f.name.toLowerCase().endsWith('.png')
    )
    addFiles(pngFiles.length > 0 ? pngFiles : newFiles)
  }

  return (
    <>
      <SEOHead
        title="PNG to PDF Converter - Convert PNG to PDF Free Online"
        description="Convert PNG to PDF online for free. Combine multiple PNG images into one PDF document. High quality conversion with no registration required. 100% secure."
        keywords="png to pdf, convert png to pdf, png to pdf converter, combine png to pdf, merge png to pdf, png pdf"
        canonicalUrl="/png-to-pdf"
      />
      <HowToSchema
        name="How to Convert PNG to PDF"
        description="Convert your PNG images to PDF in 4 easy steps"
        steps={howToSteps}
      />
      <FAQSchema questions={faqs} />

      <div className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              PNG to PDF Converter
            </h1>
            <p className="text-lg text-gray-600">
              Convert PNG images to PDF documents instantly. Free, secure, and no registration required.
            </p>
          </div>

          <AdBanner position="top" />

          <Card className="mt-6">
            <div className="space-y-6">
              <ImageDropzone onFilesAdded={handleAddFiles} />
              <PreviewList files={files} onRemove={removeFile} onReorder={reorderFiles} />

              {files.length > 0 && (
                <>
                  <div className="border-t border-gray-200 pt-6">
                    <PdfSettings
                      pageSize={pageSize}
                      quality={quality}
                      onPageSizeChange={setPageSize}
                      onQualityChange={setQuality}
                    />
                  </div>

                  {isConverting && <ProgressBar progress={progress} label="Converting..." />}

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button onClick={convert} isLoading={isConverting} disabled={files.length === 0} className="flex-1">
                      Convert PNG to PDF
                    </Button>
                    <Button variant="secondary" onClick={clearFiles} disabled={isConverting}>
                      Clear All
                    </Button>
                  </div>
                </>
              )}
            </div>
          </Card>

          <AdBanner position="in-content" />

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question}>
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          <AdBanner position="bottom" />
        </div>
      </div>
    </>
  )
}
