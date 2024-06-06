import '../styles/globals.css'
import { SWRProvider } from '@/context/SWRProvider'
import { ThemeContextProvider } from '@/context/ThemeContext'
import { sports } from '@/api/routes'
import Footer from '@/modules/footer/Footer'
import Header from '@/modules/header/Header'
import { Flex, Box, Spacer } from '@kuma-ui/core'
import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { Metadata } from 'next'

export const metadata: Metadata = {
  icons: '/favicon.ico',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let navigation = await (await fetch(sports())).json()

  return (
    <html lang="en">
      <KumaRegistry>
        <ThemeContextProvider>
          <SWRProvider>
            <body>
              <Flex
                as="div"
                bg="colors.surface.s0"
                minHeight="100vh"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Header sports={navigation} />
                <Box as="main" flexGrow="1">
                  {children}
                </Box>
                <Spacer size="48px" />
                <Footer />
              </Flex>
            </body>
          </SWRProvider>
        </ThemeContextProvider>
      </KumaRegistry>
    </html>
  )
}
