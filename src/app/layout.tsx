import './globals.css'
import { Rubik } from 'next/font/google'
import { ReactNode } from 'react'

const rubik = Rubik({ subsets: ['latin'], weight: ["400", "500", "700"], variable: '--font-rubik' })

export const metadata = {
  title: 'IP Address Tracker',
  description: 'A aplicação IP Address Tracker permite rastrear e obter informações detalhadas sobre endereços IP e domínios. Com a integração da API de Geolocalização de IP da IPify, a aplicação fornece dados precisos sobre a localização geográfica de um endereço IP específico',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${rubik.variable} font-sans`}>{children}</body>
    </html>
  )
}