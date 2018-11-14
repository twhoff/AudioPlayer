const getSongs = (state) => {
    return state.songs
}

const getCurrentSong = (state) => {
    return state.currentSong
}

export {
    getSongs,
    getCurrentSong,
}