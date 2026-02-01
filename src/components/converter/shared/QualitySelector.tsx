import { QualityPreset } from '../../../lib/image'

interface QualitySelectorProps {
  value: QualityPreset
  onChange: (quality: QualityPreset) => void
}

export function QualitySelector({ value, onChange }: QualitySelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">Quality</label>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onChange('high')}
          className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-colors ${
            value === 'high'
              ? 'border-primary-500 bg-primary-50 text-primary-700'
              : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <div className="flex flex-col items-center gap-1">
            <span>High Quality</span>
            <span className="text-xs text-gray-500">Larger file size</span>
          </div>
        </button>
        <button
          type="button"
          onClick={() => onChange('low')}
          className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-colors ${
            value === 'low'
              ? 'border-primary-500 bg-primary-50 text-primary-700'
              : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <div className="flex flex-col items-center gap-1">
            <span>Low Quality</span>
            <span className="text-xs text-gray-500">Smaller file size</span>
          </div>
        </button>
      </div>
    </div>
  )
}
