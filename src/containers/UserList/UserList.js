import React from 'react'
import Page from '../../components/Page'
import Card from '../../components/Card'
import Search from '../../components/Search'

export default ({ users }) => {
  return (
    <Page title="Users">
      <Search />
      {users.map(user => {
        return <Card key={user.id}>{user.login}</Card>
      })}
    </Page>
  )
}
