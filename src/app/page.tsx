import Image from 'next/image'
import React from 'react'
import DotsBackground from '@/assets/images/loginDotsBackground.png'
import { LanguageSelector } from '@/components/root/languageSelector';

export default function RootPage() {
  return (
    <section className='w-full relative bg-[#225AEA9C] h-full flex flex-col m-auto mr-0 overflow-hidden'>
      <Image
        src={DotsBackground}
        width={1920}
        height={1080}
        alt='background'
        className='absolute -top-0 -right-0 h-full object-cover z-[2] opacity-85'
      />
      <LanguageSelector />
    </section>
  );
}
