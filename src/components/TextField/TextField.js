import React from 'react'
import './TextField.css'

export default function TextField({
  id,
  label,
  name,
  onChange,
  type = 'text',
  value
}) {
  return (
    <div className="TextField">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
    </div>
  )
}
