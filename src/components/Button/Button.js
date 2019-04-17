import React from 'react'
import './Button.css'

export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button className="Button" type={type} onClick={onClick}>
      {children}
    </button>
  )
}
