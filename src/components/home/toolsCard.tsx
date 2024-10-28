'use client'

import { cardsPropType } from '@/types/homeTypes';
import Link from 'next/link'
import React from 'react'

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ToolsCard = ({ card }: cardsPropType) => {
  const t = useTranslations('cards')

  const { title, subtitle, redirect, isActive, features } = card

  return (
    <article className={`w-[98%] flex flex-col md:flex-row bg-dk-background border-t-[1.5px] my-0 mx-auto py-3 border-y-[#DEDEDE] overflow-hidden transition-all first:border-t-0 gap-3`}>
      <div className={`flex relative justify-center items-center my-3 overflow-hidden rounded-lg ${isActive ? "cursor-pointer" : "cursor-default"}`}>
        {
          !isActive && <div className='cover w-full h-full absolute z-10 bg-[#7D7D7DC2] flex'><p className='m-auto text-dk-background'>{t('card_image_cover_text')}</p></div>
        }

        {
          isActive
            ? <div className={`wistia_embed wistia_async_${redirect.videoID} popover=true w-[220px] h-[110px] object-contain`}>&nbsp;</div>
            : <Image src={card.img} alt={t(title)} width={220} height={110} className='w-[220px] h-[110px] object-contain' />
        }
      </div>
      <div className='textsCont w-[60%] flex flex-col my-auto'>
        <h2 className='w-[100%] mx-auto text-dk-texts font-bold text-[16px] mb-0'>{t(title)}</h2>
        <p className='w-[100%] text-[#585858] mx-auto font-medium text-[12px] mt-1'>{t(subtitle)}</p>
        {
          features.map((feature, idx) => (
            <div className='w-full flex m-auto my-[2px] gap-1' key={idx}>
              <div className='dot min-w-[6px] min-h-[6px] w-[6px] h-[6px] my-auto mr-2 ml-3 bg-dk-primary rounded-full' />
              <p key={idx} className='w-[100%] m-auto text-dk-primary font-medium text-[12px]'>{t(feature)}</p>
            </div>
          ))
        }
      </div>

      <div className='stateContainer relative h-[90%] m-auto flex'>
        <div className={`absolute top-0 flex right-0 text-[10px] py-[3px] px-2 pr-4 rounded-full font-semibold ${isActive ? 'bg-[#009B3A26] text-[#009B3A]' : "bg-[#9B000321] text-[#C50003]"}`}> <div className={`w-[8px] h-[8px] rounded-full ${isActive ? "bg-[#009B3A]" : "bg-[#C50003]"} m-auto mr-2`} /> { isActive ? t('card_idicator_text_green') : t('card_idicator_text_red') }</div>
        <Link
          href={card.isActive ? redirect.url : ''}
          className={`mainBtn w-[160px] min-w-max text-center py-[5px] px-3 mt-auto my-1 mx-auto bg-dk-primary text-dk-background text-[14px] font-semibold rounded-md fill-dk-background transition-all ${card.isActive ? 'hover:shadow-md hover:bg-dk-primary-h' : 'grayscale-[30%] opacity-80 cursor-default'}`}
        >
          {t(redirect.text)}
        </Link>
      </div>
    </article>
  )
}

export default ToolsCard
