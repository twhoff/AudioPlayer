import { connect } from 'react-redux'
import { playlistSelectors } from '../../../state/ducks/playlist'
import AudioPlayer from './AudioPlayer'

const mapStateToProps = state => {
    return ({
        song: playlistSelectors.getCurrentSong(state.playlistState)
    })
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);