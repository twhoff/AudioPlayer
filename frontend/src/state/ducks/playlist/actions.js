import * as types from './types'

const {

    // User interaction
    USER_CLICKED_SONG,

    // Fetching
    GET_SONGS,
    SONGS_RECEIVED,
    ERROR_GETTING_SONGS,

} = types

const userClickedSong = ( song ) => ({
    type: USER_CLICKED_SONG,
    payload: {
        song
    },
})

const getSongs = () => ({
    type: GET_SONGS,
})

const songsRecieved = (songsJson) => ({
    type: SONGS_RECEIVED,
    payload: {
        songsJson
    },
})

const errorGettingSongs = (error) => ({
    type: ERROR_GETTING_SONGS,
    payload: {
        error
    },
})

export {
    userClickedSong,
    getSongs,
    songsRecieved,
    errorGettingSongs,
}