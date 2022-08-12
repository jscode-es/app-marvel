import { createContext, useState } from 'react'

const LoginContext = createContext(null)

export function LoginProvider({ children }: any) {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <LoginContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext