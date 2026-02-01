import { Select } from '../../ui'
import { QualitySelector } from '../shared'
import { OutputFormat } from '../../../lib/pdf'
import { QualityPreset } from '../../../lib/image'

interface ImageSettingsProps {
  format: OutputFormat
  quality: QualityPreset
  onFormatChange: (format: OutputFormat) => void
  onQualityChange: (quality: QualityPreset) => void
}

const FORMAT_OPTIONS = [
  { value: 'jpg', label: 'JPEG (.jpg)' },
  { value: 'png', label: 'PNG (.png)' },
  { value: 'webp', label: 'WebP (.webp)' },
]

export function ImageSettings({
  format,
  quality,
  onFormatChange,
  onQualityChange,
}: ImageSettingsProps) {
  return (
    <div className="space-y-4">
      <Select
        label="Output Format"
        options={FORMAT_OPTIONS}
        value={format}
        onChange={(e) => onFormatChange(e.target.value as OutputFormat)}
      />
      <QualitySelector value={quality} onChange={onQualityChange} />
    </div>
  )
}
