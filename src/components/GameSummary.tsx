import React from 'react'

import { useSelector } from '../store'

import Badge from './Badge'

function GameSummary() {
  const { currentLevel, score } = useSelector(({ digitSpan }) => digitSpan)

  return (
    <div className="bg-purple-400 p-8 flex flex-col gap-5">
      <Badge value={currentLevel}>Level</Badge>
      <Badge value={score}>Score</Badge>
      <button
        className="
          bg-green-400
          hover:bg-green-500
          text-gray-50
          hover:text-gray-200

          p-4
          rounded-lg
        "
      >
        Play Level
      </button>
    </div>
  )
}

export default GameSummary
