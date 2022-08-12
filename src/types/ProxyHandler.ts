export type ProxyHandler<T, P extends string> = {
    get?(target: T, p: P, receiver: any): any;
    set?(
        target: { results: { [key in P]?: T } },
        p: P,
        value: any,
        receiver: any,
    ): boolean;
};
