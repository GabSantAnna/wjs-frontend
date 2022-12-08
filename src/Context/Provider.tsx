import React, { ReactElement, ReactNode } from 'react'
import myContext from './index'

interface ProviderProp {
    children: JSX.Element
}

export const Provider = ({ children }: ProviderProp) => {

    return (
        <myContext.Provider value='oi'>
            {children}
        </myContext.Provider>
    )
}
