import React, { Component } from 'react'
import { Animated, Image } from 'react-native'
import Images from './Images'
import Constants from '../Constants'

export default class Plane extends Component {
    constructor(props) {
        super(props)

        this.animatedValue = new Animated.Value(this.props.body.velocity.y)
    }

    render() {
        const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x
        const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y
        const x = this.props.body.position.x - width / 2
        const y = this.props.body.position.y - height / 2

        this.animatedValue.setValue(this.props.body.velocity.y)
        let rotation = this.animatedValue.interpolate({
            inputRange: [-20, 0, 10, 20],
            outputRange: ['-20deg', '0deg', '10deg', '20deg'],
            extrapolate: 'clamp'
        })

        // let image = Images['plane' + this.props.pose]

        return (
            <Animated.Image
                style={{
                    position: 'absolute',
                    left: x,
                    top: y,
                    width: Constants.PLANE_WIDTH,
                    height: Constants.PLANE_HEIGHT,
                    transform: [{ rotate: rotation }]
                }}
                resizeMode="stretch"
                source={Images.plane2}
            />
        )
    }
};
