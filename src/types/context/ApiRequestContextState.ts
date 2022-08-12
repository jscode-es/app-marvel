import { ContextStateUninitialized } from './ContextStateUninitialized'
import { ContextStateInitialized } from './ContextStateInitialized'
import { ContextStateFetching } from './ContextStateFetching'
import { ContextStateFetched } from './ContextStateFetched'

export type ApiRequestContextState<T> =
    | ContextStateUninitialized
    | ContextStateInitialized
    | ContextStateFetching<T>
    | ContextStateFetched<T>;