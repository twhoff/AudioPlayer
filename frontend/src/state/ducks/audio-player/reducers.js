import { PLAY, STOP, LOAD_SOURCES } from './types'

/**
 * State shape:
 *  {
 *      playing:    bool,
 *      sources:    Array[
 *                      Object{
 *                          path:string,
 *                          type:stringOf['audio/ogg', 'audio/mp3']
 *                      }
 *                  , ...]
 *  }
 */

const initialState = {
    playing: false,
    sources: [],
}

const audioPlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY:
            return state
        case STOP:
            return state
        case LOAD_SOURCES:
            return state
        default:
            return state
    }
}

export default audioPlayerReducer