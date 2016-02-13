// third party imports
import {createStore as create_store, applyMiddleware, compose} from 'redux'
import {responsiveStoreEnhancer} from 'redux-responsive'
import {createMouseStoreEnhancer} from 'redux-mouse'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
// local imports
import reducer from './reducer'


const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    middlewares.push(createLogger({
        // always collapse console groups
        collapsed: () => true,
        // filter out all actions except those defined within this project
        predicate: (_, {type}) => type.startsWith('spire/'),
    }))
}


export function createStore(initialData) {
    return create_store(
        reducer,
        initialData,
        compose(
            createMouseStoreEnhancer({
                target: document.getElementById('canvas'),
            }),
            responsiveStoreEnhancer,
            applyMiddleware(...middlewares)
        )
    )
}
