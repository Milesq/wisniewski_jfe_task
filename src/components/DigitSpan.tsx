import React from 'react'

import { useSelector } from '../store'

import GameSummary from './GameSummary'
import GameBoard from './GameBoard'
import Lifeline from './Lifeline'

function DigitSpan() {
  const life = useSelector(({ digitSpan }) => digitSpan.life)

  return (
    <div className="flex items-stretch">
      <div className="relative flex justify-center bg-gray-800 text-white">
        <div className="absolute top-0 left-0">
          <Lifeline life={life} />
        </div>
        <GameBoard />
      </div>
      <GameSummary />
    </div>
  )
}

export default DigitSpan
