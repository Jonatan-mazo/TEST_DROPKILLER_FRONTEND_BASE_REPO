import { create } from 'zustand'
import { globalSideBarStateType } from '@/types/sideBarTypes'

export const useGlobalSideBarState = create<globalSideBarStateType>((set) => ({
  isOpenSideBar: true,
  itemSelected: 0,
  subItemSelected: 100,
  itemExpanded: 100,
  changeItemExpanded: (data: number) => set(() => ({ itemExpanded: data })),
  changeIsOpenSideBar: (data: boolean) => set(() => ({ isOpenSideBar: data })),
  changeItemSelected: (data: number) => set(() => ({ itemSelected: data })),
  changeSubItemSelected: (data: number) => set(() => ({ subItemSelected: data }))
}))
