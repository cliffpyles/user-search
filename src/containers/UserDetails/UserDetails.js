import React, { Component } from 'react'
import { connect } from 'react-redux'
import { executeGetDetails } from '../../store/actions'
import MediaObject from '../../components/MediaObject'
import Page, { PageContent, PageHeader } from '../../components/Page'
import PropList from '../../components/PropList'

class UserDetails extends Component {
  componentDidMount() {
    if (this.props && this.props.executeGetDetails) {
      const { username, executeGetDetails } = this.props
      executeGetDetails(username)
    }
  }

  render() {
    const { profile = {} } = this.props
    const { avatar_url, bio, name } = profile

    return (
      <Page title="User Details">
        <PageHeader>
          <MediaObject src={avatar_url}>
            {name && <h1>{name}</h1>}
            {bio && <p>{bio}</p>}
          </MediaObject>
        </PageHeader>
        <PageContent>
          <PropList
            data={profile}
            allowedProps={[
              'blog',
              'company',
              'email',
              'followers',
              'following'
            ]}
            hideMissing
          />
        </PageContent>
      </Page>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
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
