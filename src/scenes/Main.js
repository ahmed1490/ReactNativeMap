import React, { Component, PropTypes } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/screens/Home'

import * as LocationActions from '../actions/location'

class Main extends Component {
  render() {
    const { currentUser, location, actions } = this.props;

    return (
      <Home location={location} actions={actions} />
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    location: state.location
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LocationActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)