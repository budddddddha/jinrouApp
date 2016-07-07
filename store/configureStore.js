import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        logger()
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}
