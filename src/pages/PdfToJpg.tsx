import { SEOHead, HowToSchema, FAQSchema } from '../components/seo'
import { Card, Button } from '../components/ui'
import { AdBanner } from '../components/ads'
import { PdfDropzone, PageGrid, ImageSettings } from '../components/converter/PdfToImage'
import { ProgressBar } from '../components/converter/shared'
import { usePdfToImage } from '../hooks'

const howToSteps = [
  { name: 'Upload PDF', text: 'Click the upload area or drag and drop your PDF file.' },
  { name: 'Select Pages', text: 'Choose which pages to convert to JPG images.' },
  { name: 'Choose Quality', text: 'Select high or low quality for your output images.' },
  { name: 'Download JPGs', text: 'Click Convert and download your JPG images.' },
]

const faqs = [
  {
    question: 'How do I convert PDF to JPG?',
    answer: 'Upload your PDF file, select the pages you want to convert, choose your quality settings, and click Convert. Your JPG images will be ready to download.',
  },
  {
    question: 'Can I convert all PDF pages to JPG at once?',
    answer: 'Yes, you can convert all pages at once. Multiple images will be downloaded as a ZIP file for convenience.',
  },
  {
    question: 'What quality options are available?',
    answer: 'We offer high quality (larger file size, better detail) and low quality (smaller file size, faster processing) options.',
  },
  {
    question: 'Is my PDF file secure during conversion?',
    answer: 'Yes, all processing happens locally in your browser. Your PDF never leaves your device and is not uploaded to any server.',
  },
]

export function PdfToJpg() {
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

  // Set format to JPG by default
  const handleLoad = async (file: File) => {
    setOutputFormat('jpg')
    await loadPdfFile(file)
  }

  return (
    <>
      <SEOHead
        title="PDF to JPG Converter - Convert PDF to JPEG Free Online"
        description="Convert PDF to JPG online for free. Extract PDF pages as high-quality JPEG images. Select specific pages, choose quality, and download instantly. No upload required."
        keywords="pdf to jpg, convert pdf to jpg, pdf to jpeg, extract images from pdf, pdf to image converter, free pdf converter"
        canonicalUrl="/pdf-to-jpg"
      />
      <HowToSchema
        name="How to Convert PDF to JPG"
        description="Convert your PDF to JPG images in 4 easy steps"
        steps={howToSteps}
      />
      <FAQSchema questions={faqs} />

      <div className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              PDF to JPG Converter
            </h1>
            <p className="text-lg text-gray-600">
              Convert PDF pages to high-quality JPG images. Free, secure, and no registration required.
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
                      format="jpg"
                      quality={quality}
                      onFormatChange={() => {}}
                      onQualityChange={setQuality}
                    />
                  </div>

                  {isConverting && <ProgressBar progress={progress} label="Converting..." />}

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button onClick={convertSelected} isLoading={isConverting} disabled={selectedPages.length === 0} className="flex-1">
                      Convert to JPG
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
