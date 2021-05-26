import React from 'react'
import { useDispatch } from 'react-redux'

import { useSelector } from '../store'
import { createSequence } from '../store/digitSpan'

import Badge from './Badge'

function GameSummary() {
  const dispatch = useDispatch()
  const { currentLevel, score } = useSelector(({ digitSpan }) => digitSpan)

  function startNextLevel() {
    dispatch(createSequence())
  }

  return (
    <div className="bg-purple-400 p-8 flex flex-col gap-5">
      <Badge value={currentLevel}>Level</Badge>
      <Badge value={score}>Score</Badge>
      <button
        onClick={startNextLevel}
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
