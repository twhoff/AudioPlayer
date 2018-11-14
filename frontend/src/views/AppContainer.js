import { connect } from 'react-redux'
import { playlistOperations, playlistSelectors } from '../state/ducks/playlist'
import App from './App'

const mapStateToProps = state => {
    return ({
        songs: playlistSelectors.getSongs(state.playlistState),
        currentSong: playlistSelectors.getCurrentSong(state.playlistState)
    })
}

const mapDispatchToProps = {
    onComponentDidMount: playlistOperations.getSongs
}

export default connect(mapStateToProps, mapDispatchToProps)(App);