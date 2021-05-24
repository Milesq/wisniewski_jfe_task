import React from 'react'
import pluralize from 'pluralize'

import { useSelector } from '../store'

import Keyboard from './Keyboard'

function GameBoard() {
  const { currentLevel, score } = useSelector(({ digitSpan }) => digitSpan)
  const pluralizedDigits = pluralize('digit', currentLevel)

  return (
    <div className="flex flex-col items-center w-2/3">
      <span>
        {currentLevel}&nbsp;
        <span className="capitalize">{pluralizedDigits}</span>
      </span>

      <div>{score}</div>

      <Keyboard />
    </div>
  )
}

export default GameBoard
