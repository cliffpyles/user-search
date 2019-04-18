import React from 'react'
import './Page.css'

export default function Page({ children }) {
  return <div className="Page">{children}</div>
}

export const PageContent = ({ children }) => {
  return <div className="PageContent">{children}</div>
}

export const PageFooter = ({ children }) => {
  return <div className="PageFooter">{children}</div>
}

export const PageHeader = ({ children }) => {
  return <div className="PageHeader">{children}</div>
}

export const PageSidebar = ({ children }) => {
  return <div className="PageSidebar">{children}</div>
}
