import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Video from 'react-native-video'
import Slider from '@react-native-community/slider';
import Garden from './assets/garden.mp3'

export default class AudioComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0.5
    };
  }

  renderAudio () {
    return (
      <Video
        source={Garden}
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
        style={styles.audioSlider}
        value={this.state.volume}
        onSlidingComplete={(value) => this.setState({volume: value})}
      />
    )
  }

  render () {
    return (
      <View style={styles.audioMenu}>
        {this.renderAudio()}
        <Text style={styles.audioLabel}>Music Volume</Text>
        {this.renderSlider()}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  audioMenu: {
    position: 'absolute',
    bottom: '5%',
    width: '100%'
  },
  audioLabel: {
    textAlign: 'center'
  },
  audioSlider: {
    height: 40,
    marginLeft: '10%',
    width: '80%'
  }
});