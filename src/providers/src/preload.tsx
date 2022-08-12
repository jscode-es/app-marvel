import { createContext, useEffect, useState } from 'react'

const PreloadContext = createContext(null)

export function PreloadProvider({ children }: any) {

    const DELAY = 2000
    const [isHide, setHide] = useState(true)

    useEffect(() => {
        setTimeout(() => setHide(false), DELAY)
    }, [])

    return (
        <PreloadContext.Provider value={{ isHide, setHide }}>
            {children}
        </PreloadContext.Provider>
    )
}

export default PreloadContext