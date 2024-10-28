'use client'

import dynamic from 'next/dynamic'
const ToolsCard = dynamic(() => import('@/components/home/toolsCard'), { ssr: false })

import React from 'react'
import { cards } from '@/utils/homeCardsList'

export const ListContainer = () => {
  return (
    <div className='relative cardsListContainer w-full flex p-3 flex-wrap gap-1'>
      {
        cards.map((card, idx) => (
          <ToolsCard card={card} key={idx} />
        ))
      }
    </div>
  )
}
