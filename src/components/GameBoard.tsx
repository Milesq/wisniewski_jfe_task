import React, { useEffect, useState } from 'react'
import pluralize from 'pluralize'

import { useSelector } from '../store'
import { delay } from '../utils'

import Keyboard from './Keyboard'

const TIME_OF_PRESENTING_NUMBER = 800

function GameBoard() {
  const { currentLevel, currentSequence } = useSelector(
    ({ digitSpan }) => digitSpan
  )
  const pluralizedDigits = pluralize('digit', currentLevel)

  const [presentedNumber, setPresentedNumber] = useState<number | null>(null)

  useEffect(() => {
    ;(async () => {
      for (const number of currentSequence) {
        setPresentedNumber(number)
        await delay(TIME_OF_PRESENTING_NUMBER)
      }

      setPresentedNumber(null)
    })()
  }, [currentSequence])

  return (
    <div className="flex flex-col items-center justify-evenly w-2/3">
      <span>
        {currentLevel}&nbsp;
        <span className="capitalize">{pluralizedDigits}</span>
      </span>

      <div
        className="
          text-green-500
          bg-gray-600
          text-8xl
          rounded-xl

          w-32
          h-32
          center
        "
      >
        {presentedNumber}
      </div>

      <Keyboard />
    </div>
  )
}

export default GameBoard
