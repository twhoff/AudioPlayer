import * as types from './types'

const {
    PLAY,
    STOP,
    LOAD_SOURCES
} = types

// Actions are created as functions, regardless of input requirement
// This keeps actions flexible
const play = ( id ) => ({
    type: PLAY,
    payload: {
        id,
    },
})

const stop = () => ({
    type: STOP,
})

const loadSources = () => ({
    type: LOAD_SOURCES,
})

export {
    play,
    stop,
    loadSources,
}