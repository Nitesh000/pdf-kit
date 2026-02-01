import { SEOHead, HowToSchema, FAQSchema } from '../components/seo'
import { Card, Button } from '../components/ui'
import { AdBanner } from '../components/ads'
import { ImageDropzone, PreviewList, PdfSettings } from '../components/converter/ImageToPdf'
import { ProgressBar } from '../components/converter/shared'
import { useImageToPdf } from '../hooks'

const howToSteps = [
  { name: 'Select JPG Files', text: 'Click the upload area or drag and drop your JPG/JPEG images.' },
  { name: 'Arrange Order', text: 'Reorder images to set the page order in your PDF.' },
  { name: 'Choose Settings', text: 'Select page size (A4, Letter) and quality level.' },
  { name: 'Download PDF', text: 'Click Convert and download your new PDF document.' },
]

const faqs = [
  {
    question: 'How do I convert JPG to PDF for free?',
    answer: 'Simply upload your JPG images using our converter, arrange them in the desired order, select your preferred settings, and click Convert. The PDF will be generated instantly in your browser.',
  },
  {
    question: 'Is it safe to convert JPG to PDF online?',
    answer: 'Yes, our converter processes all files locally in your browser. Your images never leave your device and are not uploaded to any server, ensuring complete privacy.',
  },
  {
    question: 'Can I combine multiple JPG files into one PDF?',
    answer: 'Yes, you can upload multiple JPG images and they will be combined into a single PDF document. You can reorder the images before converting.',
  },
  {
    question: 'What is the maximum file size for JPG to PDF conversion?',
    answer: 'Since processing happens in your browser, the limit depends on your device memory. Most devices can handle files up to 50MB each without issues.',
  },
]

export function JpgToPdf() {
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
    const jpgFiles = newFiles.filter(
      (f) => f.type === 'image/jpeg' || f.name.toLowerCase().endsWith('.jpg') || f.name.toLowerCase().endsWith('.jpeg')
    )
    addFiles(jpgFiles.length > 0 ? jpgFiles : newFiles)
  }

  return (
    <>
      <SEOHead
        title="JPG to PDF Converter - Convert JPEG to PDF Free Online"
        description="Convert JPG to PDF online for free. Combine multiple JPEG images into one PDF document. No registration, no watermark. 100% secure - files never leave your browser."
        keywords="jpg to pdf, jpeg to pdf, convert jpg to pdf, jpg to pdf converter, combine jpg to pdf, merge jpg to pdf"
        canonicalUrl="/jpg-to-pdf"
      />
      <HowToSchema
        name="How to Convert JPG to PDF"
        description="Convert your JPG images to PDF in 4 easy steps"
        steps={howToSteps}
      />
      <FAQSchema questions={faqs} />

      <div className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              JPG to PDF Converter
            </h1>
            <p className="text-lg text-gray-600">
              Convert JPG and JPEG images to PDF documents instantly. Free, secure, and no registration required.
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
                      Convert JPG to PDF
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
