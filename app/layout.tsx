import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nguyen Minh Quang - AI R&D (Computer Vision, Edge)',
  description: 'IT student building real-time vision prototypes on edge devices. Comfortable with data pipelines, latency constraints, and HW–SW integration.',
  keywords: ['AI', 'Computer Vision', 'Edge Computing', 'PyTorch', 'OpenCV', 'ONNX'],
  authors: [{ name: 'Nguyen Minh Quang' }],
  creator: 'Nguyen Minh Quang',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quangstudy.com',
    title: 'Nguyen Minh Quang - AI R&D (Computer Vision, Edge)',
    description: 'IT student building real-time vision prototypes on edge devices. Comfortable with data pipelines, latency constraints, and HW–SW integration.',
    siteName: 'Nguyen Minh Quang Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyen Minh Quang - AI R&D (Computer Vision, Edge)',
    description: 'IT student building real-time vision prototypes on edge devices. Comfortable with data pipelines, latency constraints, and HW–SW integration.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://quangstudy.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
