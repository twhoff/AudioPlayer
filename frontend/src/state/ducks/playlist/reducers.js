import * as types from './types'

/**
 * State shape:
 *  {
 *      fetching:       bool,
 *      fetched:        bool
 *      songs:          Array:JSON
 *      currentSong:    Song{}
 *      errors:         TypeError
 *  }
 */

const initialState = {
    fetching: false,
    fetched: false,
    songs: [],
    currentSong: null,
    errors: null,
}

const {
    USER_CLICKED_SONG,
    GET_SONGS,
    SONGS_RECEIVED,
    ERROR_GETTING_SONGS,
} = types

const audioPlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_CLICKED_SONG:
            return {
                ...state,
                currentSong: action.payload.song
            }
        case GET_SONGS:
            return { ...state, fetching: true }
        case SONGS_RECEIVED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                songs: action.payload.songsJson
            }
        case ERROR_GETTING_SONGS:
            return {
                ...state,
                fetching: false,
                errors: action.payload.error
            }
        default:
            return state
    }
}

export default audioPlayerReducer