import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Global config
import config from '../../../config'

// Resources
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 600,
        padding: theme.spacing.unit * 2,
        marginTop: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

class AudioPlayer extends Component {

    constructor(props) {
        super(props)

        this.audioComponentRef = React.createRef()
    }

    componentDidUpdate() {
        console.log(this.audioComponentRef)
        this.audioComponentRef.current.load()
        this.audioComponentRef.current.play()
    }

    render() {
        const {
            classes,
        } = this.props;

        const {
            song,
        } = this.props

        return (
            <Grid container spacing={16}>
                <Grid item xs={(song) ? 9 : 12}>
                    <audio ref={this.audioComponentRef} controls>
                        {(song) && (
                            (song.sources) && song.sources.map(
                                (source) => (
                                    <source key={song.id} src={`${config.apiUrl}/songs/${source.file}`} type={source.type} />
                                )
                            )
                        )}
                        <p>Browser too old to support HTML5 audio? How depressing!</p>
                    </audio>
                    {(song) && (
                        <div>
                            <p>
                                Now playing: {song.title} from {song.albumn} by {song.artist} - released {song.year}
                            </p>
                        </div>
                    )}
                </Grid>
                {(song) && (
                    <Grid item xs={3}>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} src={song.albumnCoverThumb} alt={`${song.album} albumn cover - by ${song.artist}`} />
                        </ButtonBase>
                    </Grid>
                )}
            </Grid>
        )
    }
}

AudioPlayer.propTypes = {
    song: PropTypes.object
}

export default withStyles(styles)(AudioPlayer)