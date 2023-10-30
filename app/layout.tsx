import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sydney Water Bike Rentals',
  description: 'Water Bike Rentals',
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
