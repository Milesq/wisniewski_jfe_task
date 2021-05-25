import React from 'react'

import GameSummary from './GameSummary'
import GameBoard from './GameBoard'

function DigitSpan() {
  return (
    <div className="flex items-stretch">
      <div className="flex justify-center bg-gray-800 text-white">
        <GameBoard />
      </div>
      <GameSummary />
    </div>
  )
}

export default DigitSpan
