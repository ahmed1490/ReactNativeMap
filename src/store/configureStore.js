import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Platform } from 'react-native'
import reducer from '../reducers/index'
//* import Reactotron from 'reactotron'

// import devTools from 'remote-redux-devtools'

const loggerMiddleware = createLogger({
  collapsed: true,
  // stateTransformer: state => state.toJS() // Transformation necessary because of Immutable.js
})

// const combineMiddleware = applyMiddleware(
//   thunkMiddleware,
//   loggerMiddleware, 
//   //* Reactotron.reduxMiddleware
// )
// const enhancer = compose(
//   combineMiddleware,
//   // Reactotron.storeEnhancer()
//   devTools()  // To use remote dev tools enable this and the import devTools
// )
//----

const middlewares = [thunkMiddleware, loggerMiddleware];

let enhancer;
if (__DEV__) {

  const devTools = require('remote-redux-devtools');
  enhancer = compose(
    applyMiddleware(...middlewares),
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678
    })
  );
} else {
  enhancer = applyMiddleware(...middlewares);
}


export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('../reducers'));
    });
  }
  //* Reactotron.addReduxStore(store) ;
  return store;
}