'use client'

import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'

interface ContextValue {
  screenWidth: number
}

const ScreenContext = createContext<ContextValue>({} as ContextValue)

export const ScreenContextProvider = ({ children }: PropsWithChildren) => {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)

    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <ScreenContext.Provider value={{ screenWidth }}>{children}</ScreenContext.Provider>
}

export const useScreenContext = () => useContext(ScreenContext)
