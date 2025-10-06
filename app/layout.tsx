import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "TVR Web - Desenvolvimento de Soluções Tecnológicas",
  description:
    "TVR Web desenvolve aplicativos mobile, web apps, automação e backend. Transformamos negócios com tecnologia de ponta usando React, Next.js, Node.js, Python e mais.",
  keywords: [
    "desenvolvimento web",
    "aplicativos mobile",
    "automação",
    "backend",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "TVR Web",
  ],
  authors: [{ name: "TVR Web" }],
  creator: "TVR Web",
  publisher: "TVR Web",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "TVR Web - Desenvolvimento de Soluções Tecnológicas",
    description: "Desenvolvemos soluções tecnológicas que transformam negócios e criam experiências inesquecíveis.",
    siteName: "TVR Web",
  },
  twitter: {
    card: "summary_large_image",
    title: "TVR Web - Desenvolvimento de Soluções Tecnológicas",
    description: "Desenvolvemos soluções tecnológicas que transformam negócios e criam experiências inesquecíveis.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
