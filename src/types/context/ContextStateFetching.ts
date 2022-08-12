export type ContextStateFetching<T> = {
    url: string
    isFetching: true
    data?: T
}
