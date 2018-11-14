# Frontend

## Description
App which serves as a player to play audio files in a browser.

## NPM Packages
- redux
- redux-thunk
- react-redux
- redux-devtools-extension
- node-sass
- prop-types

### Core features / behaviour
- (X) Songs are lazy loaded
- (X) Songs are streamed and buffered
- (X) User can play and pause current song
- ( ) User can skip to next song or previous song (double click back)
- (X) User can see list of all available songs
- (X) User can select any song from list to play

### Additional features / behaviour
- ( ) User can skip current playback forward or backwards by 10 seconds
- ( ) User can login and save favorite songs
- ( ) User can create customised playlists
- ( ) Users can share favorites songs and playlists with other users
- ( ) Users can add other users as "friends"
- ( ) Users can see what their friends are listening to
- ( ) Users can see how many times a song has been played (by themselves and in total)

# Backend

## Description
RESTful API to stream songs and song meta data to the frontend player.

## NPM Packages
- nodemon
- express

## Routes
- `/songs` : Returns list of songs and meta data
    - May need to consider for when there are many songs and lazy load
- `/song/id` : Streams a particular song to the browser
    - Need to figure out how to do this :)

## Metadata
- Some metadata can be read directly from audio files
- Structure (JSON):
```
{
    "songs": [
        {
            "id": 1,
            "artist": "Metallica",
            "albumn": "Master Of Puppets",
            "title": "Welcome Home (Sanitarium)",
            "length": 388,
            "genre": "Rock",
            "style": ["Thrash", "Speed Metal"],
            "year": 1986,
            "albumnCover": "https://img.discogs.com/HSuP6Uqx1DYkX7V9h3o2cC_AV6o=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1549636-1265948094.jpeg.jpg",
            "albumnCoverThumb": "https://img.discogs.com/nypNrYyMw4BZc11Cij4z39BgPM0=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1549636-1265948094.jpeg.jpg",
            "trackNumber": 4,
            "sources": [{
                "file": "04 Welcome Home (Sanitarium) 3.mp3",
                "path": "./public/songs",
                "type": "audio/mp3"
            }],
            "userPlays": 56,
            "allUserPlays": 2143
        },
        {...},
        {...}
    ]
}
```