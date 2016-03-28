import React, { Component } from 'react-native';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';

import Home from '../components/screens/Home'
import Main from './Main'

const initialState = {
  currentUser: {}
};

export default class SimpleLoginApp extends Component {
  render() {
    let store = configureStore()
    // console.log(store.getState())
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}