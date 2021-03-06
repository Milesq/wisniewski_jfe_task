import React from 'react'
import range from 'lodash.range'

export interface KeyboardProps {
  onKeyDown?(digit: number): void
  disabled?: boolean
}

function Keyboard({ onKeyDown, disabled = false }: KeyboardProps) {
  // prettier-ignore
  const digits = [
    range(0, 5),
    range(5, 10)
  ]

  return (
    <div className="flex flex-wrap justify-center">
      {digits.map((part, i) => (
        <div key={i} className="flex">
          {part.map(digit => (
            <button
              key={digit}
              type="button"
              disabled={disabled}
              onClick={() => onKeyDown?.(digit)}
              className={`
                bg-purple-400
                active:bg-purple-600
                ${!disabled && 'hover:bg-purple-500'}

                focus:outline-none
                focus:ring-4
                focus:ring-green-500
                focus:ring-opacity-50

                text-white
                text-2xl
                rounded-full

                w-12
                h-12
                m-1

                select-none
                ${disabled && 'cursor-default'}

                center
              `}
            >
              {digit}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
