'use client'

import React from 'react'
import { ToolsCard } from '@/components/home/toolsCard'
import { cards } from '@/utils/homeCardsList'

export const ListContainer = () => {
  return (
    <div className='relative cardsListContainer w-full flex p-3 flex-wrap gap-1'>
      {
        cards.map((card, idx) => (
          <ToolsCard card={card} key={idx} index={idx} />
        ))
      }
    </div>
  )
}
