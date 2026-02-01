import { HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import type { RouteRecord } from 'vite-react-ssg'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { ImageToPdf } from './pages/ImageToPdf'
import { PdfToImage } from './pages/PdfToImage'
import { JpgToPdf } from './pages/JpgToPdf'
import { PngToPdf } from './pages/PngToPdf'
import { PdfToJpg } from './pages/PdfToJpg'
import { PdfToPng } from './pages/PdfToPng'
import { About } from './pages/About'
import { HowItWorks } from './pages/HowItWorks'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'

function Root() {
  return (
    <HelmetProvider>
      <Layout>
        <Outlet />
      </Layout>
    </HelmetProvider>
  )
}

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'image-to-pdf', element: <ImageToPdf /> },
      { path: 'pdf-to-image', element: <PdfToImage /> },
      { path: 'jpg-to-pdf', element: <JpgToPdf /> },
      { path: 'png-to-pdf', element: <PngToPdf /> },
      { path: 'pdf-to-jpg', element: <PdfToJpg /> },
      { path: 'pdf-to-png', element: <PdfToPng /> },
      { path: 'about', element: <About /> },
      { path: 'how-it-works', element: <HowItWorks /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'terms', element: <Terms /> },
    ],
  },
]
