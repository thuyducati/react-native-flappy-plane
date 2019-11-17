import React, { Component } from 'react'
import { Image, View, StatusBar, Text } from 'react-native'
import Images from './Images'
import { SkypeIndicator } from 'react-native-indicators'
import styles from '../styles/Styles'

class Splash extends Component {
    constructor(props) {
        super(props)

        this._isMounted = false

        this.state = {
            isIndicatorShowing: false
        }
    }

    componentDidMount() {
        this._isMounted = true

        this.ensureTimer()
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    ensureTimer = () => {
        setInterval(
            () => {
                if (this._isMounted) {
                    this.setState({
                        isIndicatorShowing: true
                    })
                }
            },
            1000
        )
    }

    render() {
        return (
            <View style={styles.splashContainer}>
                <StatusBar hidden={true} />

                <View style={styles.imageView}>
                    <Image
                        source={Images.plane1}
                        style={styles.imageStyle}
                    />
                    <Text style={styles.textStyle}>
                        Flappy Plane
                    </Text>
                </View>

                {
                    this.state.isIndicatorShowing &&
                    <SkypeIndicator
                        style={styles.skypeView}
                        color='white'
                        count={6}
                        size={50}
                        minScale={0.3}
                        maxScale={1.1}
                    />
                }
            </View>
        )
    }
}

export default Splash    