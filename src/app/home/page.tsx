import React from 'react'
import type { Metadata } from "next";
import { BannerHome } from '@/components/home/bannerHome'
import { useTranslations } from 'next-intl'
import { ListContainer } from '@/components/home/listContainer';

export const metadata: Metadata = {
  title: 'Dropkiller | Inicio',
};

const Home = () => {
  const t = useTranslations('homepage')
  const discordURL = 'https://discord.gg/BTavwfe6ss'

  return (
    <section className='w-full m-auto h-full flex flex-col overflow-y-auto overflow-x-hidden'>
      <BannerHome />
      <section className='relative cardsContainer w-[95%] m-auto my-2 flex flex-col bg-dk-background rounded-xl border-[1.5px] border-[#DEDEDE]'>
        <div className='head p-2 px-10 bg-[#F6F6F6] flex m-0 rounded-tl-xl rounded-tr-xl border-b border-b-[#dedede]'>
          <p className='font-medium text-[14px] m-auto ml-0'>{t('head_user_name')}</p>
          <a
            href={discordURL}
            target='_blank'
            rel='noopener noreferrer'
            className='border border-dk-primary px-2 py-[4px] text-[12px] font-medium text-dk-primary bg-dk-background rounded-md shadow-sm'
          >
            {t('head_discount_text')}
          </a>
        </div>

        <ListContainer />
      </section>
    </section>
  )
}

export default Home
