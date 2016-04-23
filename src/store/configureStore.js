import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers/index'
import Reactotron from 'reactotron'

// import devTools from 'remote-redux-devtools'

const loggerMiddleware = createLogger({
  collapsed: true,
  // stateTransformer: state => state.toJS() // Transformation necessary because of Immutable.js
})
const combineMiddleware = applyMiddleware(
  loggerMiddleware, 
  thunkMiddleware,
  Reactotron.reduxMiddleware
)
const enhancer = compose(
  combineMiddleware,
  // Reactotron.storeEnhancer()
  // devTools()  // To use remote dev tools enable this and the import devTools
)

export default function configureStore(initialState) {
  const store = createStore(
    reducer, 
    initialState,
    enhancer
  );

  Reactotron.addReduxStore(store) ;
  return store;
}