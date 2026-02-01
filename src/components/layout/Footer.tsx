import { Link } from 'react-router-dom'

const converterLinks = [
  { path: '/image-to-pdf', label: 'Image to PDF' },
  { path: '/pdf-to-image', label: 'PDF to Image' },
  { path: '/jpg-to-pdf', label: 'JPG to PDF' },
  { path: '/png-to-pdf', label: 'PNG to PDF' },
  { path: '/pdf-to-jpg', label: 'PDF to JPG' },
  { path: '/pdf-to-png', label: 'PDF to PNG' },
]

const infoLinks = [
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/about', label: 'About' },
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms of Service' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="M9 15l3 3 3-3" />
              </svg>
              <span className="font-bold text-xl text-white">PDF Kit</span>
            </Link>
            <p className="text-sm text-gray-400">
              Free online tool to convert images to PDF and PDF to images.
              100% client-side processing - your files never leave your browser.
            </p>
          </div>

          {/* Converters */}
          <div>
            <h3 className="font-semibold text-white mb-4">Converters</h3>
            <ul className="space-y-2">
              {converterLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Information</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} PDF Kit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
