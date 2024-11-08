import { svgPropsType } from '@/types/sideBarTypes'
import React from 'react'

const BackStepIcon = ({ className, size }: svgPropsType) => {
  return (
    <svg
      id="Layer_2"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120.24 136.34"
    >
      <g id="Layer_1-2" data-name="Layer_1">
        <g>
          <path d="M67.95,67.63c3.09,2.82,5.26,4.67,7.28,6.68,13.72,13.67,27.46,27.31,41.07,41.09,7.02,7.12,4.27,18.05-5.02,20.5-4.34,1.15-8.26.04-11.39-3.08-18.86-18.78-37.7-37.57-56.43-56.48-4.83-4.88-4.72-11.92.16-16.84C62.1,40.88,80.66,22.33,99.27,3.84c5.06-5.03,12.39-5.03,17.15-.36,4.86,4.77,4.84,12.15-.37,17.41-14.42,14.56-28.94,29.01-43.47,43.46-1.13,1.13-2.63,1.88-4.64,3.28Z"/>
          <path d="M.01,68.07c0-18.61-.04-37.21.03-55.82C.06,5.65,4.55.79,10.92.07c5.63-.63,11.08,3.2,12.64,8.94.29,1.07.42,2.21.42,3.32.02,37.09.04,74.17,0,111.26,0,6.77-4.62,11.79-11.08,12.41-5.71.55-11.38-3.67-12.61-9.52-.3-1.45-.27-2.98-.27-4.47-.02-17.98-.01-35.96,0-53.94Z"/>
        </g>
      </g>
    </svg>
  )
}

export default BackStepIcon


