import React, { Component } from 'react'
import { navigate, Link } from '@reach/router'
import { connect } from 'react-redux'
import {
  handleSearchInputChange,
  executePageChange,
  executeSearch
} from '../../store/actions'
import Page, {
  PageContent,
  PageHeader,
  PageSidebar
} from '../../components/Page'
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
          {results &&
            results.map(user => {
              return (
                <Card key={user.id}>
                  <p>{user.login}</p>
                  <Link to={`./${user.login}`}>view</Link>
                </Card>
              )
            })}
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
