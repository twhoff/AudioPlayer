import React, { Component } from 'react'

// Resources
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './App.css'

// Components
import AudioPlayer from './components/AudioPlayer'
import Playlist from './components/Playlist'

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

class App extends Component {

  componentDidMount() {
    this.props.onComponentDidMount()
  }

  render() {
    const { classes } = this.props;


    return (
      <Paper className={classes.root}>
          <AudioPlayer />
          <Playlist />
      </Paper>
    )
  }
}

export default withStyles(styles)(App)