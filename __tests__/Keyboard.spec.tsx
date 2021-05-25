import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Keyboard from '../src/components/Keyboard'

describe('Keyboard comonents', () => {
  it('display all digits', () => {
    const { getByText } = render(<Keyboard />)

    for (let i = 0; i <= 9; ++i) {
      expect(getByText(i.toString())).toBeVisible()
    }
  })

  it('calls callback with correct digits', () => {
    const callback = jest.fn()
    const { getByText } = render(<Keyboard onKeyDown={callback} />)

    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('9'))
    fireEvent.click(getByText('2'))

    expect(callback.mock.calls).toEqual([[5], [9], [2]])
  })
})
