import React, { Component } from 'react'
import { connect } from 'react-redux'
import { executeGetDetails } from '../../store/actions'
import Page from '../../components/Page'
import Card from '../../components/Card'

class UserDetails extends Component {
  componentDidMount() {
    if (this.props && this.props.executeGetDetails) {
      const { username, executeGetDetails } = this.props
      executeGetDetails(username)
    }
  }

  render() {
    const { followers, login } = this.props

    return (
      <Page title="User Details">
        <Card>
          <p>login: {login}</p>
        </Card>
      </Page>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.details,
    ...ownProps
  }
}

const mapDispatchToProps = {
  executeGetDetails
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails)
