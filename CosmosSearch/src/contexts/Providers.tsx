import React from 'react'
import { iChildren } from './@childrenType'
import { LinksProvider } from './LinksContext/LinksContext'

export const Providers = ({children}: iChildren) => {
  return (
    <LinksProvider>
        {children}
    </LinksProvider>
  )
}
