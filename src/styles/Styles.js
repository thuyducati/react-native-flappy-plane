import { StyleSheet } from 'react-native'
import Constants from '../Constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    gameContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    fullScreenBtn: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gameOverText: {
        color: 'white',
        fontSize: 48,
        fontFamily: 'FB',
    },
    gameOverSubText: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'FB',
    },
    yourScore: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'FB',
        marginTop: 40
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: Constants.MAX_WIDTH,
        height: Constants.MAX_HEIGHT
    },
    score: {
        color: '#fff',
        fontSize: 72,
        fontFamily: 'FB',
        position: 'absolute',
        top: 100,
        left: Constants.MAX_WIDTH / 2 - 24,
        textShadowColor: '#222222',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 2
    },
    splashContainer: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: 147,
        height: 100
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    skypeView: {
        justifyContent: 'flex-end',
        marginBottom: 50,
    },
    textStyle: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'FB',
        fontWeight: 'bold',
        marginTop: 10
    },
    lives: {
        width: 32,
        height: 32
    },
    livesView: {
        flexDirection: 'row',
        margin: 5
    }
})

export default styles