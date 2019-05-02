/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AudioComponent from './AudioComponent'
import VideoComponent from './VideoComponent'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VideoComponent />
        <AudioComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4286f4',
    height: '100%'
  }
});
