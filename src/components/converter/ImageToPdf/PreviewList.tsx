interface ImageFile {
  id: string
  file: File
  preview: string
}

interface PreviewListProps {
  files: ImageFile[]
  onRemove: (id: string) => void
  onReorder: (fromIndex: number, toIndex: number) => void
}

export function PreviewList({ files, onRemove, onReorder }: PreviewListProps) {
  const handleMoveUp = (index: number) => {
    if (index > 0) {
      onReorder(index, index - 1)
    }
  }

  const handleMoveDown = (index: number) => {
    if (index < files.length - 1) {
      onReorder(index, index + 1)
    }
  }

  if (files.length === 0) return null

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-700">
          {files.length} image{files.length !== 1 ? 's' : ''} selected
        </h3>
        <p className="text-xs text-gray-500">Drag to reorder</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {files.map((file, index) => (
          <div
            key={file.id}
            className="relative group bg-gray-100 rounded-lg overflow-hidden aspect-square"
          >
            <img
              src={file.preview}
              alt={file.file.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button
                onClick={() => handleMoveUp(index)}
                disabled={index === 0}
                className="p-1.5 bg-white rounded-full text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                title="Move up"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button
                onClick={() => handleMoveDown(index)}
                disabled={index === files.length - 1}
                className="p-1.5 bg-white rounded-full text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                title="Move down"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button
                onClick={() => onRemove(file.id)}
                className="p-1.5 bg-red-500 rounded-full text-white hover:bg-red-600"
                title="Remove"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 truncate">
              {index + 1}. {file.file.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
