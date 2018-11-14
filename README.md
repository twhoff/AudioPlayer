# AudioPlayer

The player consists of a separate `frontend` and `server` (backend) application.

## Foreword
Please see `PROJECTPLAN.md` to get an idea of the planned functionality of the player / backend.

## Frontend

Please navigate to the `frontend` folder and start the frontend using:
```
npm start
```

The frontend is a simple React application, utilising Redux and implementing a simple Ducks pattern for scalability.

The app makes using of Material-UI, however, it should be noted that this is the first time I have used it, and so I have not had time to study the docs very thoroughly.

### Improvements
- Implement last core feature and optional features listed in the project plan
- Improve the UI and make it responsive
- Need to make much better use of comments, PropTypes and tests (there are none right now)

## Backend

Please navigate to the `server` folder and start the server using:
```
npm start
```

This will run a `localhost` server on port `3001`.

The backend is a simple Node.js RESTful API. It provides GET route which responds with the song metadata verbatim.

It also provides static access to a public folder, allowing songs to be accessed directly by the `<audio>` control `<source>` tag.

The API implements a simple MVC architecture, which takes on a function-first approach. This is not ideal for scalability, as code maintenance and jumping between relevant files can become difficult.

### Improvements
- It should *NOT* be possible to download songs directly via URL.
- In an ideal siutation, the user would be authenticated to make sure they have rights to listen to the song. The song data would then be streamed to the player in chunks, utilising the Web Audio API. An excellent example of how to do this, with songs kept in a MongoDB collection, can be seen [here](https://medium.com/@richard534/uploading-streaming-audio-using-nodejs-express-mongodb-gridfs-b031a0bcb20f)
- The API could use a feature-first MVC architect (separated in modules by feature, such as user, player, statistics etc)