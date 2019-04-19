import React, { Component } from 'react'
import fetchData from '../../helpers/fetch-data'
import './DataLoader.css'

class DataLoader extends Component {
  state = {
    isPending: false,
    errors: [],
    data: null
  }

  loadData = url => {
    this.setState({ isPending: true })

    return fetchData(url)
      .then(({ data }) => {
        this._dataRequest = null

        this.setState({ isPending: false, data })
      })
      .catch(err => {
        this._dataRequest = null
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
      this._dataRequest = new AbortController()
      this.loadData(this.props.url, this._dataRequest.signal)
    }
  }

  componentWillUnmount() {
    if (this._dataRequest) {
      this._dataRequest.abort()
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
