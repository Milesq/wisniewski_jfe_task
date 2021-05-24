import React from 'react'

import Badge from './Badge'

function GameSummary() {
  return (
    <div className="bg-purple-400 p-8 flex flex-col gap-5">
      <Badge value="3">Level</Badge>
      <Badge value="2">Score</Badge>
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
