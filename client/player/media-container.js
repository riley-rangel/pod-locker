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
    this.updateProgress = this.updateProgress.bind(this)
    this.handlePlaying = this.handlePlaying.bind(this)
    this.seek = this.seek.bind(this)
    this.skip = this.skip.bind(this)
    this.updateVolume = this.updateVolume.bind(this)
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
    this.setState({ progress: this.audio.currentTime })
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
  seek({ target }) {
    this.audio.currentTime = target.value
  }
  skip({ target }) {
    target.textContent === 'replay_30'
      ? this.audio.currentTime -= 30
      : this.audio.currentTime += 30
  }
  updateVolume({ target }) {
    this.audio.volume = target.value
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
              duration={ this.state.duration }
              playing={ this.state.playing }
              progress={ this.state.progress }
              seek={ this.seek }
              skip={ this.skip }
              updatePlaying={ this.updatePlaying }
              updateVolume={ this.updateVolume }
              progressInput={ inputEl => {
                this.progressBar = inputEl
              } }
            />
        }
      </div>
    )
  }
}
