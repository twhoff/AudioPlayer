import * as actions from './actions'
import config from '../../../config'

/**
 * Operations map single or multiple actions to a single operation (or thunks)
 * Using this mapping approach gives a great deal of felxibility as it keeps
 * actions composable, and it is easy to change what a single action does
 */

/**
 * User actions
 */
const userClickedSong = (song) => (dispatch) => {
    dispatch(actions.userClickedSong(song))
}

/**
 * Fetching
 */
const getSongs = () => (dispatch) => {
    dispatch(actions.getSongs)
    fetch(`${config.apiUrl}/songs`)
        .then(response => response.json())
        .then(json => {
            dispatch(actions.songsRecieved(json.songs))
        })
        .catch((error) => {
            dispatch(actions.errorGettingSongs(error))
        })
}


const songsRecieved = actions.songsRecieved

const errorGettingSongs = actions.errorGettingSongs

export {
    userClickedSong,

    getSongs,
    songsRecieved,
    errorGettingSongs,
}
