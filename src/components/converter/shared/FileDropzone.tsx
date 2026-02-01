import { useCallback } from 'react'
import { useDropzone, Accept } from 'react-dropzone'

interface FileDropzoneProps {
  accept: Accept
  onFilesAdded: (files: File[]) => void
  multiple?: boolean
  maxFiles?: number
  children?: React.ReactNode
}

export function FileDropzone({
  accept,
  onFilesAdded,
  multiple = true,
  maxFiles,
  children,
}: FileDropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFilesAdded(acceptedFiles)
    },
    [onFilesAdded]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple,
    maxFiles,
  })

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? 'dropzone-active' : ''}`}
    >
      <input {...getInputProps()} />
      {children || (
        <div className="flex flex-col items-center gap-3">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <div className="text-gray-600">
            <span className="font-medium text-primary-600">Click to upload</span>{' '}
            or drag and drop
          </div>
          <p className="text-sm text-gray-500">
            {Object.keys(accept).join(', ')}
          </p>
        </div>
      )}
    </div>
  )
}
