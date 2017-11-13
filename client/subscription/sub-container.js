import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import SubForm from './sub-form'
import SubList from './sub-list'

export default class SubContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { subs: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    if (!formData.get('feed')) return
    const feed = { feed: formData.get('feed') }
    event.target.reset()
    this.subscribe(feed)
  }
  async subscribe(feed) {
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(feed)
    }
    const res = await fetch('/subscribe', reqOptions)
    const sub = await res.json()
    if (sub) {
      this.setState({
        subs: this.state.subs.concat(sub)
      })
    }
  }
  async componentDidMount() {
    const res = await fetch('/subscriptions')
    const subs = await res.json()
    this.setState({ subs })
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={ 12 }>
          <SubForm
            handleSumbit={ this.handleSubmit }
          />
        </Grid>
        <Grid item xs={ 12 }>
          <SubList
            subs={ this.state.subs }
            handleClick={ this.props.handleClick }
          />
        </Grid>
      </Grid>
    )
  }
}
