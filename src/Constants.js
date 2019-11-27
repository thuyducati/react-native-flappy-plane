import { Dimensions } from 'react-native'

export default Constants = {
    MAX_WIDTH: Dimensions.get('screen').width,
    MAX_HEIGHT: Dimensions.get('screen').height,
    GAP_SIZE: 300, // the space between two pipes which the bird can flying through
    PIPE_WIDTH: 70, // the width of the pipe's body
    BIRD_WIDTH: 50,
    BIRD_HEIGHT: 41,
    PLANE_WIDTH: 110, // 147 // 110 // 88
    PLANE_HEIGHT: 75 // 100 // 75 // 60
}