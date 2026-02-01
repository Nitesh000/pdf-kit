import { AdUnit } from './AdUnit'

interface AdBannerProps {
  position: 'top' | 'bottom' | 'sidebar' | 'in-content'
}

// Configure your Google Ads slot IDs here
// Get these from your Google AdSense dashboard after creating ad units
const AD_SLOTS: Record<string, string> = {
  top: '1234567890',        // Create a "Display ads" unit for header
  bottom: '0987654321',     // Create a "Display ads" unit for footer
  sidebar: '1122334455',    // Create a "Display ads" unit for sidebar
  'in-content': '5544332211', // Create an "In-feed ads" or "In-article ads" unit
}

export function AdBanner({ position }: AdBannerProps) {
  const slot = AD_SLOTS[position]

  if (!slot) return null

  const formatMap: Record<string, 'horizontal' | 'vertical' | 'rectangle' | 'auto'> = {
    top: 'horizontal',
    bottom: 'horizontal',
    sidebar: 'vertical',
    'in-content': 'rectangle',
  }

  return (
    <div className="my-4">
      <AdUnit slot={slot} format={formatMap[position]} />
    </div>
  )
}
