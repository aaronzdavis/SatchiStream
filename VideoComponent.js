import React, {Component} from 'react'
import { View, StyleSheet } from 'react-native'
import Video from 'react-native-video'
import Swami from './assets/swami.mp4'

export default class VideoComponent extends Component {
  renderVideo () {
    return (
      <Video
        source={Swami}
        style={styles.backgroundVideo}
        resizeMode={"cover"}
        volume={1.0}
        rate={1.0}
      />
    )
  }

  render () {
    return (
      <View>
        {this.renderVideo()}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});