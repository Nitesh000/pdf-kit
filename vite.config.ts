import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ['react-helmet-async', 'file-saver', 'jszip', 'jspdf', 'pdfjs-dist', 'browser-image-compression'],
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false,
    },
    dirStyle: 'nested',
    includeAllRoutes: true,
  },
})
