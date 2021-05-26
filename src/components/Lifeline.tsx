import React from 'react'
import { FaHeart, FaHeartBroken } from 'react-icons/fa'

export interface LifelineProps {
  life: number
  max?: number
}

function Lifeline({ life, max = 3 }: LifelineProps) {
  return (
    <div className="flex gap-1 m-2">
      {new Array(life).fill(0).map((_, i) => (
        <FaHeart key={i} size={24} color="red" />
      ))}

      {new Array(max - life).fill(0).map((_, i) => (
        <FaHeartBroken key={i} size={24} color="gray" />
      ))}
    </div>
  )
}

export default Lifeline
