import React from 'react-native';
const {
  View,
  Text,
  PropTypes,
  StyleSheet,
  Animated
} = React;
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

class BackdropContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entrance: new Animated.Value(0)
    };
  }

  componentDidMount() {
     Animated.spring(                      // Base: spring, decay, timing
      this.state.entrance,                 // Animate `bounceValue`
      {
        toValue: 1,                         // Animate to smaller size
        friction: 6,                        // Bouncier spring, default 7
      }
    ).start();
  }

  render() {
    let opacity = this.state.entrance;
    let marginTop = this.state.entrance.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, 0]
    });
    return (
      <Animated.View style={{opacity: opacity, marginTop: marginTop}}>
        <Button onPress={this.props.onBackClick}
          style={[styles.backBtn]}>
          <Icon name="chevron-left" size={24} style={[styles.back_image]} />
        </Button>
      </Animated.View>
    );
  }
};

BackdropContent.propTypes = {
  onBackClick: PropTypes.func
};
BackdropContent.defaultProps = {
};

const styles = StyleSheet.create({
  containerStyle: {
    // marginTop: -50,
  },

  back_image: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    // width: 50,
    // height: 50,
    // backgroundColor: "transparent"
    margin: 15,
    color: "white",
    padding: 10
  }
});

export default BackdropContent;