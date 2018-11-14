import * as actions from './actions'

/**
 * Operations map single or multiple actions to a single operation (or thunks)
 * Using this mapping approach gives a great deal of felxibility as it keeps
 * actions composable, and it is easy to change what a single action does
 */

const play = actions.play

const stop = actions.stop

const loadSources = actions.loadSources

export {
    play,
    stop,
    loadSources
}
