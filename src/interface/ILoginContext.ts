import { SetStateAction, Dispatch } from "react"

export interface LoginContextInterface {
    isLogin: boolean,
    isShow: boolean,
    setLogin?: Dispatch<SetStateAction<boolean>>,
    setShow?: Dispatch<SetStateAction<boolean>>
}