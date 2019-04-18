import React, { useState } from 'react'
import './Toggle.css'

export default function Toggle({ toggledOn = false, onClick = () => {} }) {
  const [toggled, setToggle] = useState(toggledOn)
  const handleChange = () => {
    setToggle(!toggled)
  }
  return (
    <label className="Toggle" onClick={onClick}>
      <input type="checkbox" checked={toggled} onChange={handleChange} />
    </label>
  )
}
