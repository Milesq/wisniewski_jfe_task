import React from 'react'
import { useDispatch } from 'react-redux'

import { useSelector, digitSpan } from '../store'

import Badge from './Badge'

function GameSummary() {
  const dispatch = useDispatch()
  const { currentLevel, score, currentSequence, life } = useSelector(
    ({ digitSpan }) => digitSpan
  )

  function startNextLevel() {
    const action = life !== 0 ? digitSpan.createSequence() : digitSpan.reset()
    dispatch(action)
  }

  return (
    <div className="bg-purple-400 p-8 flex flex-col gap-5">
      <Badge value={currentLevel}>Level</Badge>
      <Badge value={score}>Score</Badge>
      <button
        onClick={startNextLevel}
        disabled={!!currentSequence.length}
        className="
          bg-green-400
          hover:bg-green-500
          text-gray-50
          hover:text-gray-200

          disabled:bg-gray-200
          disabled:text-gray-500

          p-4
          rounded-lg
        "
      >
        {life ? 'Play Level' : 'Play Again'}
      </button>
    </div>
  )
}

export default GameSummary
