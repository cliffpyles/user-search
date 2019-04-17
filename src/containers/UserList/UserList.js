import React from 'react'

export default ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      {users.map(user => {
        return <div key={user.id}>{user.login}</div>
      })}
    </div>
  )
}
