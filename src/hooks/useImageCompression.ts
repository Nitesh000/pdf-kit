import { useState, useCallback } from 'react'
import { compressImage, QualityPreset } from '../lib/image'

interface UseImageCompressionReturn {
  isCompressing: boolean
  compress: (files: File[], quality: QualityPreset) => Promise<File[]>
}

export function useImageCompression(): UseImageCompressionReturn {
  const [isCompressing, setIsCompressing] = useState(false)

  const compress = useCallback(
    async (files: File[], quality: QualityPreset): Promise<File[]> => {
      setIsCompressing(true)

      try {
        const compressed = await Promise.all(
          files.map((file) => compressImage(file, quality))
        )
        return compressed
      } finally {
        setIsCompressing(false)
      }
    },
    []
  )

  return {
    isCompressing,
    compress,
  }
}
