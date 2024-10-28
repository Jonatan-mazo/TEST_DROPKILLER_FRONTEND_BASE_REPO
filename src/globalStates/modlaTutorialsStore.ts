import { create } from 'zustand'

type ModalsStoreType = {
  isOpenTutorialPopUp: boolean
  modalTutorialURL: string | null
  changeIsOpenTutorialPopUp: (data: boolean) => void
  changeModalTutorialURL: (data: string) => void
}

export const useModalTutorialStore = create<ModalsStoreType>((set) => ({
  isOpenTutorialPopUp: false,
  modalTutorialURL: null,
  changeIsOpenTutorialPopUp: (data: boolean) => set(() => ({ isOpenTutorialPopUp: data })),
  changeModalTutorialURL: (data: string) => set(() => ({ modalTutorialURL: data })),
}))