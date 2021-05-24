import React from 'react'

import GameSummary from './GameSummary'
import GameBoard from './GameBoard'

function DigitSpan() {
  return (
    <div className="flex justify-center items-center">
      <GameBoard />
      <GameSummary />
    </div>
  )
}

export default DigitSpan
