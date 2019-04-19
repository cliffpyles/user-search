import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from '@reach/router'
import { executeGetDetails } from '../../store/actions'
import Card from '../../components/Card'
import DataLoader from '../../components/DataLoader'
import MediaObject from '../../components/MediaObject'
import Page, {
  PageContent,
  PageHeader,
  PageSidebar
} from '../../components/Page'
import PropList from '../../components/PropList'

class UserDetails extends Component {
  componentDidMount() {
    if (this.props && this.props.executeGetDetails) {
      const { username, executeGetDetails } = this.props
      executeGetDetails(username)
    }
  }

  renderError = err => {
    return (
      <div>
        <p>There was an error!</p>
        {err.message && <p>{err.message}</p>}
      </div>
    )
  }

  renderLoading = () => {
    return <p>...loading</p>
  }

  renderFollowers = followers => {
    return (
      <div>
        <h3>Followers</h3>
        {followers.map(person => {
          return (
            <Card key={person.login}>
              <MediaObject src={person.avatar_url}>
                <strong>{person.login}</strong>
                <div>
                  <a href={person.html_url}>GitHub</a>
                </div>
              </MediaObject>
            </Card>
          )
        })}
      </div>
    )
  }

  renderFollowing = following => {
    return (
      <div>
        <h3>Following</h3>
        {following.map(person => {
          return (
            <Card key={person.login}>
              <MediaObject src={person.avatar_url}>
                <strong>{person.login}</strong>
                <div>
                  <a href={person.html_url}>GitHub</a>
                </div>
              </MediaObject>
            </Card>
          )
        })}
      </div>
    )
  }

  renderRepos = repos => {
    return (
      <div>
        <h2>Repos</h2>
        {repos.map(repo => {
          return (
            <Card key={repo.full_name}>
              <MediaObject src={repo.owner.avatar_url}>
                <strong>
                  <a href={repo.html_url}>{repo.name}</a>
                </strong>
                <p>{repo.description}</p>
                <p>stars: {repo.stargazers_count}</p>
                <p>watchers: {repo.watchers_count}</p>
              </MediaObject>
            </Card>
          )
        })}
      </div>
    )
  }

  render() {
    const { profile = {} } = this.props
    let {
      avatar_url,
      bio,
      name,
      followers_url,
      following_url,
      repos_url
    } = profile

    following_url = following_url
      ? following_url.replace('{/other_user}', '')
      : null

    return (
      <Page title="User Details">
        <PageHeader>
          <Link to="../">Back to Search</Link>
          <MediaObject src={avatar_url}>
            {name && <h1>{name}</h1>}
            {bio && <p>{bio}</p>}
          </MediaObject>
        </PageHeader>
        <PageContent>
          <PropList
            data={profile}
            allowedProps={[
              'location',
              'email',
              'company',
              'blog',
              'followers',
              'following',
              'public_repos',
              'public_gists'
            ]}
            hideMissing
          />
          {repos_url && (
            <DataLoader
              url={repos_url}
              renderSuccess={this.renderRepos}
              renderLoading={this.renderLoading}
              renderError={this.renderError}
            />
          )}
        </PageContent>
        <PageSidebar>
          {followers_url && (
            <DataLoader
              url={followers_url}
              renderSuccess={this.renderFollowers}
              renderLoading={this.renderLoading}
              renderError={this.renderError}
            />
          )}
          {following_url && (
            <DataLoader
              url={following_url}
              renderSuccess={this.renderFollowing}
              renderLoading={this.renderLoading}
              renderError={this.renderError}
            />
          )}
        </PageSidebar>
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
