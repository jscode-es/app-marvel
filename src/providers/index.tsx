/* ========================================*/
/* Función para prevenir de Provider Hell  */
/* ========================================*/

import { cloneElement } from 'react'

const Providers = ({ providers, children }) => {

    const renderProvider = (providers, children) => {

        const [provider, ...restProviders] = providers

        if (provider) {
            return cloneElement(
                provider,
                undefined,
                renderProvider(restProviders, children)
            )
        }

        return children
    }

    return renderProvider(providers, children)
}

export default Providers