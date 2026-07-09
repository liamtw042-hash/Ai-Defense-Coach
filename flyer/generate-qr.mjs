// Generates a self-contained QR-code SVG for the flyer.
// Run: node flyer/generate-qr.mjs   (regenerate if the URL changes)
import QRCode from 'qrcode'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// The website the QR points to. Update this to the live domain once deployed.
const URL = 'https://transitionhq.com.au'

const svg = await QRCode.toString(URL, {
  type: 'svg',
  errorCorrectionLevel: 'M',
  margin: 0,
  color: { dark: '#0A1F3C', light: '#0000' }, // navy modules, transparent background
})

writeFileSync(join(__dirname, 'qr.svg'), svg)
console.log('Wrote flyer/qr.svg for', URL)
