import '../styles/globals.css'
import { SWRProvider } from '@/context/SWRProvider'
import { ThemeContextProvider } from '@/context/ThemeContext'
import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { Metadata } from 'next'

export const metadata: Metadata = {
  icons: '/favicon.ico',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <KumaRegistry>
        <ThemeContextProvider>
          <SWRProvider>
            <body>{children}</body>
          </SWRProvider>
        </ThemeContextProvider>
      </KumaRegistry>
    </html>
  )
}
