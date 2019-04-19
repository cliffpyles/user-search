import React, { Component } from 'react'
import { navigate, Link } from '@reach/router'
import { connect } from 'react-redux'
import {
  handleSearchInputChange,
  executePageChange,
  executeSearch
} from '../../store/actions'
import DataLoader from '../../components/DataLoader'
import Page, {
  PageContent,
  PageHeader,
  PageSidebar
} from '../../components/Page'
import MediaObject from '../../components/MediaObject'
import Pagination from '../../components/Pagination'
import Card from '../../components/Card'
import Search from '../../components/Search'
import getQueryString from '../../helpers/get-query-string'
class UserList extends Component {
  handleInputChange = e => {
    this.props.handleSearchInputChange(e.target.value)
  }

  handlePageChange = link => {
    this.props.executePageChange(link)
  }

  handleSearch = () => {
    this.updateQueryParams({
      query: this.props.searchValue
    })
    this.props.executeSearch(this.props.searchValue)
  }

  updateQueryParams = queryParams => {
    const queryString = getQueryString(queryParams)
    const { search, pathname } = this.props.location

    if (queryString !== search && queryString !== '?') {
      navigate(`${pathname}${queryString}`)
    } else if (queryParams.query) {
      this.props.executeSearch(queryParams.query)
    }
  }

  renderProfile = item => {
    return (
      <MediaObject src={item.avatar_url}>
        <p>{item.name}</p>
        <p>{item.bio}</p>
        <p>
          followers: {item.followers} | following: {item.following}
        </p>
      </MediaObject>
    )
  }

  renderProfileLoading = () => {
    return <span>...loading</span>
  }

  componentDidMount() {
    if (this.props.location) {
      const currentUrl = new URL(this.props.location.href)
      const queryParams = Object.fromEntries(currentUrl.searchParams.entries())

      this.updateQueryParams(queryParams)
    }
  }

  render() {
    const {
      searchValue,
      results,
      resultsPrevious,
      resultsNext,
      resultsFirst,
      resultsLast
    } = this.props

    const hasPagination = resultsPrevious || resultsNext

    return (
      <Page>
        <PageHeader>
          <h1>Users</h1>
          <Search
            value={searchValue}
            onChange={this.handleInputChange}
            onSearch={this.handleSearch}
          />
        </PageHeader>
        <PageContent>
          {hasPagination && (
            <Pagination
              onPreviousClick={() => {
                this.handlePageChange(resultsPrevious)
              }}
              onNextClick={() => {
                this.handlePageChange(resultsNext)
              }}
              onFirstClick={() => {
                this.handlePageChange(resultsFirst)
              }}
              onLastClick={() => {
                this.handlePageChange(resultsLast)
              }}
            />
          )}
          {results &&
            results.map((user, index) => {
              return (
                <Card key={user.id}>
                  <h3>{user.login}</h3>
                  <DataLoader
                    url={user.url}
                    renderSuccess={this.renderProfile}
                    renderLoading={this.renderProfileLoading}
                  />
                  <Link to={`/users/${user.login}`}>see more</Link> |{' '}
                  <a href={user.html_url}>github</a>
                </Card>
              )
            })}
          {hasPagination && (
            <Pagination
              onPreviousClick={() => {
                this.handlePageChange(resultsPrevious)
              }}
              onNextClick={() => {
                this.handlePageChange(resultsNext)
              }}
              onFirstClick={() => {
                this.handlePageChange(resultsFirst)
              }}
              onLastClick={() => {
                this.handlePageChange(resultsLast)
              }}
            />
          )}
        </PageContent>
      </Page>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.search
  }
}

const mapDispatchToProps = {
  handleSearchInputChange,
  executeSearch,
  executePageChange
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)
