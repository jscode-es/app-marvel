import { createContext, useState } from 'react'

const ApiRequestContext = createContext(null)

export function ApiRequestProvider({ children }: any) {

    const [state, setState] = useState(true)

    // TODO implementar la acción
    let actions = {}

    return (
        <ApiRequestContext.Provider value={[state, actions]}>
            {children}
        </ApiRequestContext.Provider>
    )
}

export default ApiRequestContext