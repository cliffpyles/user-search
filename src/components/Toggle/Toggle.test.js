import React from 'react'
import Toggle from './'

describe('Toggle', () => {
  test('can be rendered', () => {
    const component = render(<Toggle />)

    expect(component).toMatchSnapshot()
  })

  test('can be rendered with toggle on', () => {
    const component = render(<Toggle toggledOn />)

    expect(component).toMatchSnapshot()
  })

  test('can be toggled', () => {
    const handleClick = jest.fn()
    const component = render(<Toggle onClick={handleClick} />)

    component.click()

    expect(handleClick).toHaveBeenCalled()
  })
})
