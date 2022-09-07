declare const Proxy: {
	new <T extends object>(
		target: { results: { [key in string]?: T }; apiInstance: ApisauceInstance },
		handler: ProxyHandler<T, string>,
	): { [key: string]: Promise<T> }
}

declare module "*.png" {
	const value: any
	export = value
}

declare module globalThis {
	const env: any
}