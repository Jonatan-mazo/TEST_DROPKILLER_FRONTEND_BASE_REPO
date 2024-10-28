import { svgPropsType } from '@/types/sideBarTypes'
import React from 'react'

export const BoxIcon = ({ size, className }: svgPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z"/>
    </svg>
  )
}
