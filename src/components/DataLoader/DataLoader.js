import React, { Component } from 'react'
import './DataLoader.css'

class DataLoader extends Component {
  state = {
    isPending: false,
    errors: [],
    data: null
  }

  loadData = url => {
    this.setState({ isPending: true })

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ isPending: false, data })
      })
      .catch(err => {
        this.setState(prevState => {
          return {
            isPending: false,
            errors: [...prevState.errors, err]
          }
        })
      })
  }

  componentDidMount() {
    if (this.props.url) {
      this.loadData(this.props.url)
    }
  }

  render() {
    const { isPending, errors, data } = this.state
    const {
      renderError = () => {},
      renderLoading = () => {},
      renderSuccess = () => {}
    } = this.props
    const hasErrors = errors.length > 0
    const hasData = typeof data !== undefined && data !== null

    return (
      <div className="DataLoader">
        {hasErrors && renderError(errors)}
        {isPending && renderLoading()}
        {hasData && renderSuccess(data)}
      </div>
    )
  }
}

export default DataLoader
