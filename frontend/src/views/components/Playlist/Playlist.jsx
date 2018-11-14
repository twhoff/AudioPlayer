import React from 'react'
import PropTypes from 'prop-types'

const Playlist = ({ songs, onUserClickedSong }) => (
    <ul>
        {(songs) && songs.map(
            (song) => (
                <li key={song.id}>
                    <a href="javascript:void(0)" onClick={() => onUserClickedSong(song)}>{song.title}</a>
                </li>
            )
        )}
    </ul>
)

Playlist.propTypes = {
    songs: PropTypes.arrayOf(
        PropTypes.object
    ),
    onUserClickedSong: PropTypes.func
}

export default Playlist