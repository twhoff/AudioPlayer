import { connect } from 'react-redux'
import { playlistOperations, playlistSelectors } from '../../../state/ducks/playlist'
import Playlist from './Playlist'

const mapStateToProps = state => {
    return ({
        songs: playlistSelectors.getSongs(state.playlistState)
    })
}

const mapDispatchToProps = {
    onUserClickedSong: playlistOperations.userClickedSong
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);