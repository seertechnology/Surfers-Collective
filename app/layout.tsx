import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Approved Mobile Welding',
  description: 'Part of the Approved Industries Company.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
