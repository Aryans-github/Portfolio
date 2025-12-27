import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aryan Jumde | Software Developer",
  description:
    "Computer Science undergraduate passionate about backend development and full-stack engineering. View projects, skills, and certifications.",
  keywords: "software developer, backend engineer, full-stack, CS student, portfolio",
  authors: [{ name: "Aryan Jumde" }],
  openGraph: {
    title: "Aryan Jumde | Software Developer",
    description: "Computer Science undergraduate passionate about backend development and full-stack engineering.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
