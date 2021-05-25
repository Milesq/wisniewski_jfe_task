import React from 'react'
import range from 'lodash.range'

export interface KeyboardProps {
  onKeyDown?(digit: number): void
}

function Keyboard({ onKeyDown }: KeyboardProps) {
  // prettier-ignore
  const digits = [
    range(0, 5),
    range(5, 10)
  ]

  return (
    <div className="flex flex-wrap">
      {digits.map((part, i) => (
        <div key={i} className="flex">
          {part.map(digit => (
            <div
              key={digit}
              onClick={() => onKeyDown?.(digit)}
              className="
                bg-purple-400
                text-white
                text-2xl
                rounded-full

                w-10
                h-10
                m-1

                select-none
                pointer-events-none

                flex
                justify-center
                items-center
              "
            >
              {digit}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
