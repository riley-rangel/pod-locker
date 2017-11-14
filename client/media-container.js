import React, { Component } from 'react'
import MediaPlayer from './media-player'

export default class MediaContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: null,
      duration: 0,
      isHidden: true,
      playing: false,
      progress: 0
    }
    this.updatePlaying = this.updatePlaying.bind(this)
    this.handlePlaying = this.handlePlaying.bind(this)
    this.updateProgress = this.updateProgress.bind(this)
  }
  updatePlaying() {
    this.state.playing
      ? this.audio.pause()
      : this.audio.play()
    this.state.playing
      ? clearInterval(this.state.counter)
      : this.setState({ counter: setInterval(this.updateProgress, 250) })
    this.state.playing
      ? this.setState({ playing: false })
      : this.setState({ playing: true })
  }
  updateProgress() {
    this.setState((prevState, props) => {
      return { progress: prevState.progress + 0.25 }
    })
  }
  handlePlaying() {
    this.setState({
      duration: this.audio.duration,
      isHidden: false,
      playing: true
    })
    if (!this.state.counter) {
      this.setState({
        counter: setInterval(this.updateProgress, 250)
      })
    }
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
              duration={ this.state.duration }
              episode={ this.props.episode }
              isHidden={ this.state.isHidden }
              playing={ this.state.playing }
              progress={ this.state.progress }
              updatePlaying={ this.updatePlaying }
            />
        }
      </div>
    )
  }
}
