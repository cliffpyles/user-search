import React from 'react'
import { Link } from '@reach/router'
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

const UserList = props => {
  const {
    input: searchValue,
    results,
    resultsPrevious,
    resultsNext,
    resultsFirst,
    resultsLast,
    handleSearchInputChange,
    executeSearch,
    executePageChange
  } = props
  const handleInputChange = e => {
    handleSearchInputChange(e.target.value)
  }
  const handleSearch = () => {
    executeSearch(searchValue)
  }
  const handlePageChange = link => {
    executePageChange(link)
  }

  return (
    <Page>
      <PageHeader>
        <h1>Users</h1>
      </PageHeader>
      <PageContent>
        {results &&
          results.map(user => {
            return (
              <Card key={user.id}>
                {user.login}
                <Link to={`./${user.login}`}>view</Link>
              </Card>
            )
          })}
        <Pagination
          onPreviousClick={() => {
            handlePageChange(resultsPrevious)
          }}
          onNextClick={() => {
            handlePageChange(resultsNext)
          }}
          onFirstClick={() => {
            handlePageChange(resultsFirst)
          }}
          onLastClick={() => {
            handlePageChange(resultsLast)
          }}
        />
      </PageContent>
      <PageSidebar>
        <Search
          value={searchValue}
          onChange={handleInputChange}
          onSearch={handleSearch}
        />
      </PageSidebar>
    </Page>
  )
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
