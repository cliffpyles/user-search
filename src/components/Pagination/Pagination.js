import React from 'react'
import Button from '../Button'
import './Pagination.css'

export default function Pagination({
  onFirstClick,
  onPreviousClick,
  onNextClick,
  onLastClick
}) {
  return (
    <div className="Pagination">
      <div className="Pagination__previous">
        <Button onClick={onFirstClick}>First</Button>
        <Button onClick={onPreviousClick}>Previous</Button>
      </div>
      <div className="Pagination__next">
        <Button onClick={onNextClick}>Next</Button>
        <Button onClick={onLastClick}>Last</Button>
      </div>
    </div>
  )
}
