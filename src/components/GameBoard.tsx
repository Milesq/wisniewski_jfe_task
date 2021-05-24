import React from 'react'

import Keyboard from './Keyboard'

function GameBoard() {
  return (
    <div className="flex flex-col">
      <span></span>
      <div></div>
      <Keyboard />
    </div>
  )
}

export default GameBoard
