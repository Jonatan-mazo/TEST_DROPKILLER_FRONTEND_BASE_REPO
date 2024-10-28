import React from 'react'
import Image from 'next/image'
import ImageBanner from '@/assets/images/HomeImageDiscord.png'

export const BannerHome = () => {
  return (
    <a href='https://discord.gg/BTavwfe6ss' target='_blank' rel='noopener noreferrer' className='relative cursor-pointer m-auto my-8 px-8 flex rounded-lg'>
      <Image src={ImageBanner} alt='Banner' height={400} className='rounded-md' />
    </a>
  )
}
