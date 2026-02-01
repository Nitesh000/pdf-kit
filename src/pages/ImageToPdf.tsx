import { SEOHead, HowToSchema } from '../components/seo'
import { Card, Button } from '../components/ui'
import { AdBanner } from '../components/ads'
import { ImageDropzone, PreviewList, PdfSettings } from '../components/converter/ImageToPdf'
import { ProgressBar } from '../components/converter/shared'
import { useImageToPdf } from '../hooks'

const howToSteps = [
  { name: 'Upload Images', text: 'Click the upload area or drag and drop your images.' },
  { name: 'Arrange Order', text: 'Reorder images by using the arrow buttons if needed.' },
  { name: 'Choose Settings', text: 'Select page size and quality options.' },
  { name: 'Convert', text: 'Click Convert to PDF and download your file.' },
]

export function ImageToPdf() {
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

  return (
    <>
      <SEOHead
        title="Image to PDF Converter"
        description="Convert images to PDF online for free. Supports JPG, PNG, GIF, WebP. Arrange pages, choose quality settings, and download instantly. No upload to server."
        keywords="image to pdf, convert image to pdf, jpg to pdf, png to pdf, photo to pdf, free pdf converter"
        canonicalUrl="/image-to-pdf"
      />
      <HowToSchema
        name="How to Convert Images to PDF"
        description="Convert your images to PDF in 4 easy steps"
        steps={howToSteps}
      />

      <div className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Image to PDF Converter
            </h1>
            <p className="text-lg text-gray-600">
              Convert your images to PDF documents. Supports JPG, PNG, GIF, WebP, and BMP.
            </p>
          </div>

          <AdBanner position="top" />

          <Card className="mt-6">
            <div className="space-y-6">
              {/* Dropzone */}
              <ImageDropzone onFilesAdded={addFiles} />

              {/* Preview List */}
              <PreviewList
                files={files}
                onRemove={removeFile}
                onReorder={reorderFiles}
              />

              {/* Settings */}
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

                  {/* Progress */}
                  {isConverting && (
                    <ProgressBar progress={progress} label="Converting..." />
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      onClick={convert}
                      isLoading={isConverting}
                      disabled={files.length === 0}
                      className="flex-1"
                    >
                      Convert to PDF
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={clearFiles}
                      disabled={isConverting}
                    >
                      Clear All
                    </Button>
                  </div>
                </>
              )}
            </div>
          </Card>

          <AdBanner position="bottom" />

          {/* How It Works */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How to Convert Images to PDF
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howToSteps.map((step, index) => (
                <div key={step.name} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-600 rounded-full font-bold mb-3">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.name}</h3>
                  <p className="text-sm text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
