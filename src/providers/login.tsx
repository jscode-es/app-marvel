import { createContext, useState } from 'react'

//import { LoginContextInterface } from '../../interface/ILoginContext'

const LoginContext = createContext(null)

export function LoginProvider({ children }: any) {

	const [isLogin, setLogin] = useState(false)
	const [isShow, setShow] = useState(false)

	const value: any = {
		isLogin,
		setLogin,
		isShow,
		setShow
	}

	return (
		<LoginContext.Provider value={value}>
			{children}
		</LoginContext.Provider>
	)
}

export default LoginContext