import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import Splash from './Splash'

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
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
            <View>
                <StatusBar hidden={true} />
                <Text>
                    This is menu
                </Text>
            </View>
        )
    }
}

export default Menu