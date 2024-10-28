'use client'

import React, { useState, useRef, useEffect, SetStateAction } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { IconProps } from '@/types/filtersFieldsTypes';
import { useGlobalAdvanceFiltersState } from '@/globalStates/advanceFilterStore'

interface Option {
  value: string;
  label: string;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
}

interface CustomSelectorProps {
  options: Option[];
  placeholder?: string;
  multi?: boolean;
  isSort?: boolean
  isFollowed?: boolean
  isPlatform?: boolean
  setCleaning: React.Dispatch<SetStateAction<boolean>>
  cleaning: boolean
  fID:  'filterByString' |
        'filterByProvider' |
        'filterbyCategory' |
        'filterByProvider' |
        'filterbyPriceMin' |
        'filterbyPriceMax' |
        'filterBySales7Min' |
        'filterBySales7Max' |
        'filterBySales30Min' |
        'filterBySales30Max' |
        'filterByStockMin' |
        'filterByStockMax' |
        'filterByProfits7Min' |
        'filterByProfits7Max' |
        'filterByProfits30Min' |
        'filterByProfits30Max' |
        'filterByIncomesMin' |
        'filterByIncomesMax' |
        'filterByCountries' |
        'sortBySales' |
        'sortByProfits' |
        'sortByProvPrice'
  ffID: 'filterByString' |
        'filterbyCategory' |
        'filterByCountries' |
        'sortBySales'
}

const Icon: React.FC<IconProps> = ({ src, svg, alt, html }) => {
  if (src) {
    return <Image src={src} alt={alt || ''} width={alt?.includes('flag') ? 20 : 16} height={16} className={` ${alt?.includes('flag') ? 'min-w-[20px] w-[20px]' : "min-w-[16px] w-[16px]"} h-[16px] mx-[5px] my-auto rounded-[3px] ${alt?.includes('flag') ? 'object-cover' : 'object-contain'}`} />
  }
  if (svg) {
    return <span dangerouslySetInnerHTML={{ __html: svg }} className="min-w-[16px] w-[16px] h-[16px] mx-[5px] my-auto text-[14px] size-2" />;
  }
  if (html) {
    return html
  }
  return null;
};

const CustomSelector: React.FC<CustomSelectorProps> = ({
  options,
  placeholder = 'Select an option',
  multi = false,
  isSort,
  isFollowed,
  fID,
  ffID,
  isPlatform,
  cleaning,
  setCleaning
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  const selectorRef = useRef<HTMLDivElement>(null);

  const changeFiltersAndSorters = useGlobalAdvanceFiltersState(state => state.changeFiltersAndSorters)
  const changeFiltersAndSortersFollow = useGlobalAdvanceFiltersState(state => state.changeFiltersAndSortersFollow)
  const filtersAndSorters: any = useGlobalAdvanceFiltersState(state => state.filtersAndSorters)
  const filtersAndSortersFollow: any = useGlobalAdvanceFiltersState(state => state.filtersAndSortersFollow)

  const store = useGlobalAdvanceFiltersState(state => state.store)
  const changeStore = useGlobalAdvanceFiltersState(state => state.changeStore)

  const handleSelect = (option: Option) => {
    if (isPlatform) {
      setSelectedOptions([option]);
      setIsOpen(false);
      changeStore(option.value)
    } else {
      if (multi) {
        const updatedSelection = selectedOptions.some((selected: any) => selected.value === option.value)
          ? selectedOptions.filter((selected: any) => selected.value !== option.value)
          : [...selectedOptions, option];
        setSelectedOptions(updatedSelection);

        if (updatedSelection.length > 0) {
          const value = updatedSelection.map((opt: any) => ({value: opt.value, label: opt.label}))
          isFollowed ? changeFiltersAndSortersFollow({ key: fID, value }) : changeFiltersAndSorters({ key: fID, value })
        } else {
          isFollowed ? changeFiltersAndSortersFollow({ key: fID, value: null }) : changeFiltersAndSorters({ key: fID, value: null })
        }
      } else {
        setSelectedOptions([option]);
        const value = {value: option.value, label: option.label}
        isFollowed ? changeFiltersAndSortersFollow({ key: fID, value }) : changeFiltersAndSorters({ key: fID, value })
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isPlatform) {
      const platformSelected = options.find(ele => ele.value === store)
      setSelectedOptions(platformSelected ? [platformSelected] : [])
    } else {
      let optionSelectedByuser: any = []
      let optionSelectedByuserFollow: any = []

      if (multi) {
        if (filtersAndSorters[fID] !== null && filtersAndSorters[fID].length > 0) {
          optionSelectedByuser = options.filter(ele => filtersAndSorters[fID].some((el: { value: string, label: string }) => el.value.toLowerCase() === ele.value.toLowerCase()))
          optionSelectedByuserFollow = options.filter(ele => filtersAndSorters[fID].some((el: { value: string, label: string }) => el.value.toLowerCase() === ele.value.toLowerCase()))
        }

        setSelectedOptions(isFollowed ? optionSelectedByuserFollow ? optionSelectedByuserFollow : [] : optionSelectedByuser ? optionSelectedByuser : [])
      } else {
        if (filtersAndSorters[fID] !== null) {
          optionSelectedByuser = options.filter(ele => ele.value === filtersAndSorters[fID].value)
          optionSelectedByuserFollow = options.filter(ele => ele.value === filtersAndSorters[fID].value)
          setSelectedOptions(isFollowed ? optionSelectedByuserFollow ? optionSelectedByuserFollow : null : optionSelectedByuser ? optionSelectedByuser : null)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [filtersAndSorters]);

  useEffect(() => {
    if (cleaning) {
      setCleaning(false)
      setSelectedOptions([]);
      isFollowed ? changeFiltersAndSortersFollow({ key: fID, value: null }) : changeFiltersAndSorters({ key: fID, value: null })
    }
  }, [cleaning])

  const renderTriggerContent = () => {
    if (selectedOptions) {
      if (selectedOptions.length === 0) {
        return <div className="flex overflow-hidden gap-1 mr-1"><span className="w-full min-w-max m-auto text-[14px] text-[#585858] pr-5 pl-1 py-[7px]">{placeholder}</span></div>
      }

      if (multi) {
        return (
          <div className="flex overflow-hidden gap-1 mr-1 py-[5px]">
            {
              selectedOptions.map((option: any) => {

                return (
                  <span key={option.value} className="flex m-auto bg-dk-btn-h-b text-dk-primary rounded py-[2px] px-1 text-[14px] font-semibold">
                    {option.leftIcon && <Icon {...option.leftIcon} />}
                    {option.label}
                    {option.rightIcon && <Icon {...option.rightIcon} />}
                  </span>
                )
              })
            }
          </div>
        );
      } else {
        const selectedOption = selectedOptions[0]
        if (selectedOption) {
          return (
            <div className="w-full flex m-auto py-[7px] overflow-hidden">
              {selectedOption.leftIcon && <Icon {...selectedOption.leftIcon} />}
              <span className='text-[14px] font-semibold min-w-max'>{selectedOption.label}</span>
              {selectedOption.rightIcon && <Icon {...selectedOption.rightIcon} />}
            </div>
          );
        }
      }
    }

  };

  // if (!selectedOptions) return null

  return (
    <div className={`relative w-full h-auto my-auto flex bg-dk-background rounded-lg fill-dk-sec-texts hover:fill-dk-primary hover:border-dk-primary text-dk-texts hover:text-dk-primary border-[1px] border-[#DEDEDE] border-b-2 transition-all`} ref={selectorRef}>
      <div
        className="w-full flex m-auto px-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {renderTriggerContent()}
        {
          isSort
            ? <AdjustmentsHorizontalIcon className={`size-4 min-w-[16px] text-[#585858] m-auto mr-[2px]`} />
            : <ChevronDownIcon className={`size-4 min-w-[16px] text-[#585858] m-auto mr-[2px] transition-transform duration-200 ease-in-out ${isOpen ? 'transform rotate-180' : ''}`} />
        }
        {
          (selectedOptions?.length > 0 && !isPlatform) &&
          <XMarkIcon
            className={`size-4 min-w-[16px] m-auto mx-0 text-[#585858] hover:text-[#000] transition-all`}
            onClick={() => {
              setSelectedOptions([]);
              isFollowed ? changeFiltersAndSortersFollow({ key: fID, value: null }) : changeFiltersAndSorters({ key: fID, value: null })
            }}
          />
        }
      </div>
      {isOpen && (
        <ul className="absolute top-[100%] left-0 w-full mt-1 bg-dk-background flex flex-col gap-1 border border-[#dedede] rounded-md shadow-lg max-h-[150px] overflow-auto z-[100]">
          {
            options &&
            options.flat().map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`flex items-center transition-all p-2 cursor-pointer text-dk-texts font-normal hover:bg-dk-btn-h-b hover:text-dk-primary-h ${
                  selectedOptions.some((selected: any) => selected.value === option.value) ? 'bg-dk-btn-h-b text-dk-primary' : ''
                }`}
              >
                {option.leftIcon && <Icon {...option.leftIcon} />}
                <span className={`text-[14px] ${selectedOptions.some((selected: any) => selected.value === option.value) ? 'text-dk-primary font-bold' : 'text-dk-texts'}`}>{option.label}</span>
                {option.rightIcon && <Icon {...option.rightIcon} />}
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default CustomSelector;
