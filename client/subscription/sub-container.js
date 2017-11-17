import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import SubForm from './sub-form'
import SubList from './sub-list'

export default class SubContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { subscriptions: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.unsubscribe = this.unsubscribe.bind(this)
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
    const subscription = await res.json()
    if (subscription) {
      this.setState({
        subscriptions: this.state.subscriptions.concat(subscription)
      })
    }
  }
  async unsubscribe({ target }) {
    const $selected = target.closest('div[ data-id ]')
    if (!$selected) return
    const id = $selected.getAttribute('data-id')
    const confirmed = window.confirm('Do you want to unsubscribe?')
    if (!confirmed) return
    await fetch('/subscription/' + id, { method: 'DELETE' })
    this.setState({
      subscriptions: this.state.subscriptions.filter(subscription => {
        return subscription.id !== id
      })
    })
  }
  async componentDidMount() {
    const res = await fetch('/subscriptions')
    const subscriptions = await res.json()
    this.setState({ subscriptions })
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
            subscriptions={ this.state.subscriptions }
            handleClick={ this.props.handleClick }
            unsubscribe={ this.unsubscribe }
          />
        </Grid>
      </Grid>
    )
  }
}
