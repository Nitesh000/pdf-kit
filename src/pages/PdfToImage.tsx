import { SEOHead, HowToSchema } from '../components/seo'
import { Card, Button } from '../components/ui'
import { AdBanner } from '../components/ads'
import { PdfDropzone, PageGrid, ImageSettings } from '../components/converter/PdfToImage'
import { ProgressBar } from '../components/converter/shared'
import { usePdfToImage } from '../hooks'

const howToSteps = [
  { name: 'Upload PDF', text: 'Click the upload area or drag and drop your PDF file.' },
  { name: 'Select Pages', text: 'Click on pages to select or deselect them for conversion.' },
  { name: 'Choose Format', text: 'Select output format (JPG, PNG, WebP) and quality.' },
  { name: 'Download', text: 'Click Convert and download individual images or as a ZIP.' },
]

export function PdfToImage() {
  const {
    pdfFile,
    pages,
    selectedPages,
    isLoading,
    isConverting,
    progress,
    outputFormat,
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

  return (
    <>
      <SEOHead
        title="PDF to Image Converter"
        description="Convert PDF to images online for free. Export PDF pages as JPG, PNG, or WebP. Select specific pages, choose quality, and download instantly. No upload to server."
        keywords="pdf to image, convert pdf to jpg, pdf to png, pdf to webp, extract images from pdf, free pdf converter"
        canonicalUrl="/pdf-to-image"
      />
      <HowToSchema
        name="How to Convert PDF to Images"
        description="Convert your PDF to images in 4 easy steps"
        steps={howToSteps}
      />

      <div className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              PDF to Image Converter
            </h1>
            <p className="text-lg text-gray-600">
              Convert PDF pages to high-quality images. Export as JPG, PNG, or WebP.
            </p>
          </div>

          <AdBanner position="top" />

          <Card className="mt-6">
            <div className="space-y-6">
              {/* Dropzone or File Info */}
              {!pdfFile ? (
                <PdfDropzone onFileAdded={loadPdfFile} />
              ) : (
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                      <path d="M14 2v6h6M9 15h6" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">{pdfFile.name}</p>
                      <p className="text-sm text-gray-500">
                        {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button variant="secondary" onClick={clearPdf}>
                    Remove
                  </Button>
                </div>
              )}

              {/* Loading Progress */}
              {isLoading && (
                <ProgressBar progress={progress} label="Loading PDF..." />
              )}

              {/* Page Grid */}
              {pages.length > 0 && (
                <>
                  <div className="flex gap-2 justify-end">
                    <Button variant="secondary" onClick={selectAllPages}>
                      Select All
                    </Button>
                    <Button variant="secondary" onClick={deselectAllPages}>
                      Deselect All
                    </Button>
                  </div>
                  <PageGrid
                    pages={pages}
                    selectedPages={selectedPages}
                    onTogglePage={togglePageSelection}
                  />
                </>
              )}

              {/* Settings */}
              {pages.length > 0 && (
                <>
                  <div className="border-t border-gray-200 pt-6">
                    <ImageSettings
                      format={outputFormat}
                      quality={quality}
                      onFormatChange={setOutputFormat}
                      onQualityChange={setQuality}
                    />
                  </div>

                  {/* Conversion Progress */}
                  {isConverting && (
                    <ProgressBar progress={progress} label="Converting..." />
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      onClick={convertSelected}
                      isLoading={isConverting}
                      disabled={selectedPages.length === 0}
                      className="flex-1"
                    >
                      Convert {selectedPages.length} Page{selectedPages.length !== 1 ? 's' : ''} to Images
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
              How to Convert PDF to Images
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
