import React, { Component } from 'react'
import { View } from 'react-native'

import { GameEngine } from 'react-native-game-engine'

import Constants from './src/Constants'

import styles from './src/Styles'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isRunning: true
    }

    this.GameEngine = null

    this.entities = this.setupWorld()
  }

  setupWorld = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <GameEngine>

        </GameEngine>
      </View>
    )
  }
}