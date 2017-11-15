const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
    height: '130px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    boxShadow: '0 -3px 6px rgba( 0, 0, 0, 0.16), 0 3px 6px rgba( 0, 0, 0, 0.23)'
  },
  coverArt: {
    position: 'relative',
    top: '8px',
    left: '8px',
    margin: '0 auto',
    height: 'auto',
    width: '100px'
  },
  title: {
    marginTop: '7px',
    overflow: 'hidden'
  },
  controls: {
    margin: '0 0.5rem',
    color: '#673ab7',
    border: '2px solid #673ab7',
    borderRadius: '100%'
  },
  play: {
    fontSize: '3.5rem'
  },
  skip: {
    fontSize: '2.5rem'
  },
  progessLeft: {
    display: 'inline-block',
    float: 'left',
    color: '#616161'
  },
  progressRight: {
    display: 'inline-block',
    float: 'right',
    color: '#616161'
  },
  left: {
    width: '400px'
  },
  middle: {
    marginTop: '15px',
    width: 'calc(100vw - 800px)'
  },
  right: {
    marginTop: '18px',
    width: '400px'
  },
  volume: {
    height: '100%'
  },
  volumeBar: {
    width: '200px !important'
  },
  volumeControls: {
    color: '#616161'
  }
}

export default styles
