import type { Metadata } from 'next'
import './globals.css'
import { Khand } from 'next/font/google'

const khand = Khand({ weight: '500', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GitHub Commit Viewer',
  description: 'Aplicación web que permite visualizar el registro de commits del presente proyecto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${khand.className} bg-emerald-200 dark:bg-blue-950`}>{children}</body>
    </html>
  )
}
