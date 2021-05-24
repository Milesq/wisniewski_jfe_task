import React from 'react'

import GameSummary from './GameSummary'
import GameBoard from './GameBoard'

function DigitSpan() {
  return (
    <div className="flex justify-center items-stretch">
      <div className="flex justify-items-center bg-purple-900 text-white">
        <GameBoard />
      </div>
      <GameSummary />
    </div>
  )
}

export default DigitSpan
