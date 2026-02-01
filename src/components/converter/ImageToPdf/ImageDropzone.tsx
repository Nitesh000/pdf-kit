import { FileDropzone } from '../shared'

interface ImageDropzoneProps {
  onFilesAdded: (files: File[]) => void
}

const ACCEPTED_IMAGE_TYPES = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/gif': ['.gif'],
  'image/webp': ['.webp'],
  'image/bmp': ['.bmp'],
}

export function ImageDropzone({ onFilesAdded }: ImageDropzoneProps) {
  return (
    <FileDropzone accept={ACCEPTED_IMAGE_TYPES} onFilesAdded={onFilesAdded}>
      <div className="flex flex-col items-center gap-3">
        <svg
          className="w-16 h-16 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">
            Drop your images here
          </p>
          <p className="text-gray-500">or click to browse</p>
        </div>
        <p className="text-sm text-gray-400">
          Supports JPG, PNG, GIF, WebP, BMP
        </p>
      </div>
    </FileDropzone>
  )
}
