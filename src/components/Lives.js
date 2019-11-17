import React, { Component } from 'react'
import { Image } from 'react-native'
import Images from './Images'
import styles from '../styles/Styles'

export default () => (
    <Image
        source={Images.live2}
        resizeMode='stretch'
        style={styles.lives}
    />
)