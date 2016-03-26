import React, { Component } from 'react-native';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';

import Home from './Home'

const initialState = {
  currentUser: {}
};

export default class SimpleLoginApp extends Component {
  render() {
    let store = configureStore(initialState)
    // console.log(store.getState())
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}