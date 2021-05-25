import React, { PropsWithChildren, ReactNode } from 'react'

export interface BadgeProps {
  value: ReactNode
}

function Badge({ value, children }: PropsWithChildren<BadgeProps>) {
  return (
    <div
      className="
        w-32
        h-32
        p-7

        center
        flex-col

        bg-purple-700
        text-white
        rounded-full
        text-xl
      "
    >
      <div>{children}</div>
      <div className="text-4xl">{value}</div>
    </div>
  )
}

export default Badge
