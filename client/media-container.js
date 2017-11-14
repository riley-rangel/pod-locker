import React, { Component } from 'react'
import MediaPlayer from './media-player'

export default class MediaContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
      playing: false
    }
    this.updatePlaying = this.updatePlaying.bind(this)
    this.handlePlaying = this.handlePlaying.bind(this)
  }
  updatePlaying() {
    this.state.playing
      ? this.audio.pause()
      : this.audio.play()
    this.state.playing
      ? this.setState({ playing: false })
      : this.setState({ playing: true })
  }
  handlePlaying() {
    this.setState({
      isHidden: false,
      playing: true
    })
  }
  render() {
    return (
      <div>
        <audio
          ref={ ref => {
            this.audio = ref
          } }
          src={ this.props.episode.url }
          onPlaying={ this.handlePlaying }
          autoPlay
        />
        {
          this.state.isHidden
            ? null
            : <MediaPlayer
              episode={ this.props.episode }
              isHidden={ this.state.isHidden }
              playing={ this.state.playing }
              updatePlaying={ this.updatePlaying }
            />
        }
      </div>
    )
  }
}
