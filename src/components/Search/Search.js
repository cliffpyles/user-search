import React from 'react'
import TextField from '../TextField'
import Button from '../Button'

import './Search.css'

export default function Search({ id, label, name, onChange, onSearch, value }) {
  return (
    <div className="Search">
      <TextField
        id={id}
        label={label}
        name={name}
        onChange={onChange}
        type="search"
        value={value}
      />
      <Button onSearch={onSearch}>search</Button>
    </div>
  )
}
