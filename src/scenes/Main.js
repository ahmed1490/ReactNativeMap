import React, { Component, PropTypes } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/screens/Home'

import * as LocationActions from '../actions/location'
import * as JourneyActions from '../actions/journey'

class Main extends Component {
  render() {
    // const { user, location, journey, actions } = this.props;

    console.log('Main', this.props)
    return (
      <Home {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      location: bindActionCreators(LocationActions, dispatch),
      journey: bindActionCreators(JourneyActions, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)