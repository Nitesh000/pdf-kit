import { Select } from '../../ui'
import { QualitySelector } from '../shared'
import { PageSize } from '../../../lib/pdf'
import { QualityPreset } from '../../../lib/image'

interface PdfSettingsProps {
  pageSize: PageSize
  quality: QualityPreset
  onPageSizeChange: (size: PageSize) => void
  onQualityChange: (quality: QualityPreset) => void
}

const PAGE_SIZE_OPTIONS = [
  { value: 'a4', label: 'A4 (210 × 297 mm)' },
  { value: 'letter', label: 'Letter (8.5 × 11 in)' },
  { value: 'fit', label: 'Fit to Image' },
]

export function PdfSettings({
  pageSize,
  quality,
  onPageSizeChange,
  onQualityChange,
}: PdfSettingsProps) {
  return (
    <div className="space-y-4">
      <Select
        label="Page Size"
        options={PAGE_SIZE_OPTIONS}
        value={pageSize}
        onChange={(e) => onPageSizeChange(e.target.value as PageSize)}
      />
      <QualitySelector value={quality} onChange={onQualityChange} />
    </div>
  )
}
