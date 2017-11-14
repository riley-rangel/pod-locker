import React, { Component } from 'react'
import MediaPlayer from './media-player'

export default class MediaContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <audio
          ref={ ref => {
            this.audio = ref
          } }
          src={ this.props.episode }
          autoPlay
          controls
        />
        <MediaPlayer
          episode={ this.props.episode }
        />
      </div>
    )
  }
}
