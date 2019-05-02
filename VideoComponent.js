import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Video from 'react-native-video'
import Slider from '@react-native-community/slider';
import Swami from './assets/swami.mp4'

export default class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 1.0
    };
  }

  renderVideo () {
    return (
      <Video
        source={Swami}
        style={styles.backgroundVideo}
        resizeMode={"cover"}
        volume={this.state.volume}
        rate={1.0}
      />
    )
  }

  renderSlider () {
    return (
      <Slider
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        style={styles.videoSlider}
        value={this.state.volume}
        onSlidingComplete={(value) => this.setState({volume: value})}
      />
    )
  }


  render () {
    return (
      <View>
      {this.renderVideo()}
        <View style={styles.videoMenu}>
          <Text style={styles.videoLabel}>Video Volume</Text>
          {this.renderSlider()}
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    height: '100%',
    width: '100%'
  },
  videoMenu: {
    position: 'absolute',
    bottom: '15%',
    width: '100%'
  },
  videoLabel: {
    textAlign: 'center'
  },
  videoSlider: {
    height: 40,
    marginLeft: '10%',
    width: '80%'
  }
});