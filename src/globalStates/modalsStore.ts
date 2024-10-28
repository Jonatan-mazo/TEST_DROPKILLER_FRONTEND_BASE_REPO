import { Product, ProductFollow } from '@/types/productsTypes'
import { create } from 'zustand'

type ModalsStoreType = {
  isOpenUnfollowModal: boolean
  productModal: ProductFollow | Product | null,
  changeProductModal: (data: ProductFollow | Product | null) => void
  changeIsOpenUnfollowModal: (data: boolean) => void
  loandingUnfollow: boolean
  changeLoandingUnfollow: (data: boolean) => void
}

export const useGlobalModalsStore = create<ModalsStoreType>((set) => ({
  isOpenUnfollowModal: false,
  productModal: null,
  changeProductModal: (data: ProductFollow | Product | null) => set(() => ({ productModal: data })),
  changeIsOpenUnfollowModal: (data: boolean) => set(() => ({ isOpenUnfollowModal: data })),
  loandingUnfollow: false,
  changeLoandingUnfollow: (data: boolean) => set(() => ({ loandingUnfollow: data })),
}))