import React from 'react'
import { connect } from 'react-redux'
import { handleSearchInputChange, executeSearch } from '../../store/actions'
import Page from '../../components/Page'
import Card from '../../components/Card'
import Search from '../../components/Search'

const UserList = props => {
  const {
    results: users,
    input: searchValue,
    handleSearchInputChange,
    executeSearch
  } = props
  const handleInputChange = e => {
    handleSearchInputChange(e.target.value)
  }
  const handleSearch = () => {
    executeSearch(searchValue)
  }

  return (
    <Page title="Users">
      <Search
        value={searchValue}
        onChange={handleInputChange}
        onSearch={handleSearch}
      />
      {users &&
        users.map(user => {
          return <Card key={user.id}>{user.login}</Card>
        })}
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
  executeSearch
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)
