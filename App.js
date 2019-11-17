import React, { Component } from 'react'
import { View, StatusBar, TouchableOpacity, Text, Image } from 'react-native'

import { GameEngine } from 'react-native-game-engine'
import Matter from 'matter-js'

import Constants from './src/Constants'
import PlaneControl, { resetPipeCount } from './src/utils/PlaneControl'
import Bird from './src/components/Bird'
import Floor from './src/components/Ground'
import Splash from './src/components/Splash'
import Lives from './src/components/Lives'

import styles from './src/styles/Styles'
import Images from './src/components/Images'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isRunning: true,
      score: 0,
      isLoading: true, // splash screen
      lives: 3,
    }

    this.gameEngine = null

    this.entities = this.setupWorld()
  }

  setupWorld = () => {
    let engine = Matter.Engine.create({ enableSleeping: false })
    let world = engine.world
    world.gravity.y = 0.0

    // rendering the plane
    let bird = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 2,
      Constants.MAX_HEIGHT / 2,
      Constants.PLANE_WIDTH,
      Constants.PLANE_HEIGHT
    )
    let floor1 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 2,
      Constants.MAX_HEIGHT - 25,
      Constants.MAX_WIDTH + 10, // adjust here to fill up the floor if the velocity is increase
      50,
      { isStatic: true }
    )
    let floor2 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH + (Constants.MAX_WIDTH / 2),
      Constants.MAX_HEIGHT - 25,
      Constants.MAX_WIDTH + 10, // adjust here to fill up the floor if the velocity is increase
      50,
      { isStatic: true }
    )

    Matter.World.add(world, [bird, floor1, floor2])

    Matter.Events.on(engine, 'collisionStart', (event) => {
      var pairs = event.pairs
      this.gameEngine.dispatch({ type: "game-over" })
    })

    return {
      physics: {
        engine: engine,
        world: world
      },
      bird: {
        body: bird,
        pose: 1,
        renderer: Bird
      },
      floor1: {
        body: floor1,
        renderer: Floor
      },
      floor2: {
        body: floor2,
        renderer: Floor
      },
    }
  }

  onEvent = (e) => {
    if (this.state.lives > 3) {
      this.state.lives -= 1
    }

    if (e.type === "game-over" && this.state.lives > 0) {
      this.gameEngine.swap(this.setupWorld())
      this.gameEngine.start()
      this.setState({
        isRunning: true,
        score: this.state.score,
        lives: this.state.lives - 1
      })
    }

    if (e.type === "game-over" && this.state.lives === 0) {
      this.gameEngine.stop()
      this.setState({
        isRunning: false
      })
    } else if (e.type === "score") {
      this.setState({
        score: this.state.score + 1,
        lives: this.state.lives + 1
      })
    }
  }

  reset = () => {
    resetPipeCount()
    this.gameEngine.swap(this.setupWorld())
    this.gameEngine.start()
    this.setState({
      isRunning: true,
      score: 0,
      lives: 3
    })
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          resolve('result')
        },
        5000
      )
    })
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask()

    if (data != null) {
      this.setState({
        isLoading: false
      })
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Splash />
    }

    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={Images.background}
          resizeMode="stretch"
        />

        <GameEngine
          ref={(ref) => { this.gameEngine = ref }}
          style={styles.gameContainer}
          systems={[PlaneControl]}
          isRunning={this.state.isRunning}
          onEvent={this.onEvent}
          entities={this.entities}
        >
          <StatusBar hidden={true} />
        </GameEngine>

        {
          this.state.lives === 0
            ?
            <View />
            :
            this.state.lives === 1
              ?
              <View style={styles.livesView}>
                <Lives />
              </View>
              :
              this.state.lives === 2
                ?
                <View style={styles.livesView}>
                  <Lives /><Lives />
                </View>
                :
                <View style={styles.livesView}>
                  <Lives /><Lives /><Lives />
                </View>
        }

        <Text style={styles.score}>
          {this.state.score}
        </Text>

        {/* Game Over and Try Again */}
        {
          !this.state.isRunning &&
          <TouchableOpacity style={styles.fullScreenBtn} onPress={this.reset}>
            <View style={styles.fullScreen}>
              <Text style={styles.gameOverText}>
                Game Over
              </Text>
              <Text style={styles.gameOverSubText}>
                Try Again
              </Text>
              <Text style={styles.yourScore}>
                Your score: {this.state.score}
              </Text>
            </View>
          </TouchableOpacity>
        }
      </View >
    )
  }
}