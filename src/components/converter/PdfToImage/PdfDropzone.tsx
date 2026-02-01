import { FileDropzone } from '../shared'

interface PdfDropzoneProps {
  onFileAdded: (file: File) => void
}

const ACCEPTED_PDF_TYPE = {
  'application/pdf': ['.pdf'],
}

export function PdfDropzone({ onFileAdded }: PdfDropzoneProps) {
  const handleFilesAdded = (files: File[]) => {
    if (files.length > 0) {
      onFileAdded(files[0])
    }
  }

  return (
    <FileDropzone
      accept={ACCEPTED_PDF_TYPE}
      onFilesAdded={handleFilesAdded}
      multiple={false}
      maxFiles={1}
    >
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">
            Drop your PDF here
          </p>
          <p className="text-gray-500">or click to browse</p>
        </div>
        <p className="text-sm text-gray-400">PDF files only</p>
      </div>
    </FileDropzone>
  )
}
