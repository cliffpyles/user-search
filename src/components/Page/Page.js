import React from 'react'
import './Page.css'

export default function Page({ children, title }) {
  return (
    <div className="Page">
      {title && <h1>{title}</h1>}
      {children}
    </div>
  )
}
