import { SEOHead, HowToSchema, FAQSchema } from '../components/seo'
import { Card, Button } from '../components/ui'
import { AdBanner } from '../components/ads'
import { PdfDropzone, PageGrid, ImageSettings } from '../components/converter/PdfToImage'
import { ProgressBar } from '../components/converter/shared'
import { usePdfToImage } from '../hooks'

const howToSteps = [
  { name: 'Upload PDF', text: 'Click the upload area or drag and drop your PDF file.' },
  { name: 'Select Pages', text: 'Choose which pages to convert to PNG images.' },
  { name: 'Choose Quality', text: 'Select high or low quality for your output images.' },
  { name: 'Download PNGs', text: 'Click Convert and download your PNG images.' },
]

const faqs = [
  {
    question: 'Why convert PDF to PNG instead of JPG?',
    answer: 'PNG format preserves sharper edges and text quality, making it ideal for documents with graphics, diagrams, or text that needs to remain crisp.',
  },
  {
    question: 'Can I convert a multi-page PDF to PNG?',
    answer: 'Yes, each page of your PDF will be converted to a separate PNG image. Multiple images are downloaded as a ZIP file.',
  },
  {
    question: 'What resolution will the PNG images have?',
    answer: 'High quality mode produces images at 2x scale for sharp, detailed output. Low quality mode produces standard resolution images.',
  },
  {
    question: 'Are my files secure?',
    answer: 'Yes, all conversion happens in your browser. Your files are never uploaded to any server, ensuring complete privacy.',
  },
]

export function PdfToPng() {
  const {
    pdfFile,
    pages,
    selectedPages,
    isLoading,
    isConverting,
    progress,
    quality,
    loadPdfFile,
    clearPdf,
    togglePageSelection,
    selectAllPages,
    deselectAllPages,
    setOutputFormat,
    setQuality,
    convertSelected,
  } = usePdfToImage()

  const handleLoad = async (file: File) => {
    setOutputFormat('png')
    await loadPdfFile(file)
  }

  return (
    <>
      <SEOHead
        title="PDF to PNG Converter - Convert PDF to PNG Free Online"
        description="Convert PDF to PNG online for free. Extract PDF pages as high-quality PNG images with transparency support. Select specific pages and download instantly."
        keywords="pdf to png, convert pdf to png, pdf to image, extract pages from pdf, pdf png converter, free pdf converter"
        canonicalUrl="/pdf-to-png"
      />
      <HowToSchema
        name="How to Convert PDF to PNG"
        description="Convert your PDF to PNG images in 4 easy steps"
        steps={howToSteps}
      />
      <FAQSchema questions={faqs} />

      <div className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              PDF to PNG Converter
            </h1>
            <p className="text-lg text-gray-600">
              Convert PDF pages to high-quality PNG images. Free, secure, and no registration required.
            </p>
          </div>

          <AdBanner position="top" />

          <Card className="mt-6">
            <div className="space-y-6">
              {!pdfFile ? (
                <PdfDropzone onFileAdded={handleLoad} />
              ) : (
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">{pdfFile.name}</p>
                      <p className="text-sm text-gray-500">{(pdfFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <Button variant="secondary" onClick={clearPdf}>Remove</Button>
                </div>
              )}

              {isLoading && <ProgressBar progress={progress} label="Loading PDF..." />}

              {pages.length > 0 && (
                <>
                  <div className="flex gap-2 justify-end">
                    <Button variant="secondary" onClick={selectAllPages}>Select All</Button>
                    <Button variant="secondary" onClick={deselectAllPages}>Deselect All</Button>
                  </div>
                  <PageGrid pages={pages} selectedPages={selectedPages} onTogglePage={togglePageSelection} />

                  <div className="border-t border-gray-200 pt-6">
                    <ImageSettings
                      format="png"
                      quality={quality}
                      onFormatChange={() => {}}
                      onQualityChange={setQuality}
                    />
                  </div>

                  {isConverting && <ProgressBar progress={progress} label="Converting..." />}

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button onClick={convertSelected} isLoading={isConverting} disabled={selectedPages.length === 0} className="flex-1">
                      Convert to PNG
                    </Button>
                  </div>
                </>
              )}
            </div>
          </Card>

          <AdBanner position="in-content" />

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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
