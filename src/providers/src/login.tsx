import { createContext, useState } from 'react'

const LoginContext = createContext(null)

export function LoginProvider({ children }: any) {

    const [isLogin, setLogin] = useState(false)

    return (
        <LoginContext.Provider value={{ isLogin, setLogin }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext