'use client'

import { useState } from 'react'
import { changeLocaleCookies } from "@/actions/changeLocaleCookies"
import CustomSelector from '@/components/customSelect/customSelect';

import Colombia from '@/assets/images/flags/colombia.png'

export const LanguageSelector = () => {
  const [cleaning, setCleaning] = useState(false)

  // changeLocaleCookies(code)
  return (
    <div className='localeContainer m-auto mr-1 mt-1 py-1 px-2 bg-dk-background rounded-md z-[3]'>
      <CustomSelector
        options={[
          {
            value: 'CO', label: 'Colombia',
            leftIcon: { src: Colombia, alt: 'Colombia flag' },
          },
          {
            value: 'PE', label: 'Perú',
            leftIcon: { src: Colombia, alt: 'Peru flag' },
          },
          {
            value: 'CL', label: 'Chile',
            leftIcon: { src: Colombia, alt: 'Chile flag' },
          },
        ]}
        placeholder={'Language'}
        fID='filterbyCategory'
        ffID='filterbyCategory'
        cleaning={cleaning}
        setCleaning={setCleaning}
      />
    </div>
  )
}
