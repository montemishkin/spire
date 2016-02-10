// third party imports
import {createStore as create_store, applyMiddleware, compose} from 'redux'
import {responsiveStoreEnhancer} from 'redux-responsive'
import {mouseStoreEnhancer} from 'redux-mouse'
import createLogger from 'redux-logger'
// local imports
import reducer from './reducer'


const middlewares = []

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    middlewares.push(createLogger({
        // always collapse console groups
        collapsed: () => true,
        // filter out all actions except those defined within this project
        predicate: (_, {type}) => type.startsWith('dots/')
    }))
}


export function createStore(initialData) {
    return create_store(
        reducer,
        initialData,
        compose(
            mouseStoreEnhancer,
            responsiveStoreEnhancer,
            applyMiddleware(...middlewares)
        )
    )
}
