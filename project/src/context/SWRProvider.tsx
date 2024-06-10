'use client'

//@ts-ignore
export const fetcher = (...args) =>
    //@ts-ignore
    fetch(...args).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('404')
      }
    })

import { SWRConfig } from 'swr'
export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
}
