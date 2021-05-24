import React from 'react'

export interface KeyboardProps {
  onKeyDown?(digit: number): void
}

function Keyboard({ onKeyDown }: KeyboardProps) {
  const digits = new Array(10).fill(null).map((el, i) => i)

  return (
    <div className="flex flex-wrap">
      {digits.map(digit => (
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

            flex
            justify-center
            items-center
          "
        >
          {digit}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
