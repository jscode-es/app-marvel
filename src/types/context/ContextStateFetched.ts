import { ApisauceInstance } from 'apisauce'

export type ContextStateFetched<T> = {
    url: string
    isFetching: false
    data: T
    apisauceInstance: ApisauceInstance
}
