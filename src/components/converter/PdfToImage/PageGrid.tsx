import { PdfPage } from '../../../lib/pdf'

interface PageGridProps {
  pages: PdfPage[]
  selectedPages: number[]
  onTogglePage: (pageNumber: number) => void
}

export function PageGrid({ pages, selectedPages, onTogglePage }: PageGridProps) {
  if (pages.length === 0) return null

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-700">
          {pages.length} page{pages.length !== 1 ? 's' : ''} • {selectedPages.length} selected
        </h3>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {pages.map((page) => {
          const isSelected = selectedPages.includes(page.pageNumber)
          return (
            <button
              key={page.pageNumber}
              onClick={() => onTogglePage(page.pageNumber)}
              className={`relative aspect-[3/4] rounded-lg overflow-hidden border-2 transition-all ${
                isSelected
                  ? 'border-primary-500 ring-2 ring-primary-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={page.thumbnail}
                alt={`Page ${page.pageNumber}`}
                className="w-full h-full object-contain bg-white"
              />
              <div
                className={`absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium ${
                  isSelected
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {isSelected && (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-0.5 text-center">
                {page.pageNumber}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
