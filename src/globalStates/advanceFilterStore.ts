import { create } from 'zustand'
import { changeFiltersProps, Filters, globalAdvanceFiltersStateType, globalDataTypes, selectOptionsType, FiltersFollow, changeFiltersFollowProps } from '@/types/filtersFieldsTypes'
import { FollowingProducts, Product, ProductFollow } from '@/types/productsTypes'
import { getDates } from '@/utils/getDates'

const filtersAndSorters: Filters = {
  filterByString: '',
  filterbyCategory: [],
  filterByProvider: null,
  filterbyPriceMin: 0,
  filterbyPriceMax: 0,
  filterBySales7Min: 0,
  filterBySales7Max: 0,
  filterBySales30Min: 0,
  filterBySales30Max: 0,
  filterByStockMin: 0,
  filterByStockMax: 0,
  filterByProfits7Min: 0,
  filterByProfits7Max: 0,
  filterByProfits30Min: 0,
  filterByProfits30Max: 0,
  filterByIncomesMin: 0,
  filterByIncomesMax: 0,
  filterByCountries: { value: 'CO', label: 'Colombia' },
  sortBySales: null,
  sortByProfits: null,
  sortByProvPrice: null,
}

const filtersAndSortersFollow: FiltersFollow = {
  filterByString: '',
  filterbyCategory: [],
  filterByCountries: null,
  sortBySales: null,
}


export const useGlobalAdvanceFiltersState = create<globalAdvanceFiltersStateType>((set, get) => ({
  loandingGlobalFilters: false,
  /* ---------------------- */

  visualPageSelected :1,
  headPageSize: 50,
  headTotalProductsCount: 0,
  headNumberOfPages: 0,
  headPageSelected: 10,
  changePageSize: (data: number) => set(() => ({ headPageSize: data })),
  changeTotalProductsCount: (data: number) => set(() => ({ headTotalProductsCount: data })),
  changeNumberOfPages: (data: number) => set(() => ({ headNumberOfPages: data })),
  changePageSelected: (data: number) => set(() => ({ headPageSelected: data })),
  changeVisualPageSelected: (data: number | null) => set(() => ({ visualPageSelected: data })),
  changePageSlectedByInc: () =>
    set((state) => ({ visualPageSelected: state.visualPageSelected ? state.visualPageSelected + 1 : 0 })),
  changePageSlectedByDec: () =>
    set((state) => ({ visualPageSelected: state.visualPageSelected ? state.visualPageSelected - 1 : 0 })),

  changeLoandingGlobalFilters: (data: boolean) => set(() => ({ loandingGlobalFilters: data })),
  changeOnFirstLoad: (data: globalDataTypes) => set(() => ({ globalProducts: JSON.parse(data.data), headNumberOfPages: data.totalPages, headTotalProductsCount: data.total, visualPageSelected: data.currentPage })),

  /* --------------------- */

  globalProducts: [],
  changeGlobalProducts: (data: Product[]) => set(() => ({ globalProducts: data })),

  /* ---------------------------- */

  datesRange: getDates().last14days,
  changeDatesRange: (data: string) => set(() => ({ datesRange: data })),

  filtersAndSorters,
  changeFiltersAndSorters: (data: changeFiltersProps) => set((state) => ({ filtersAndSorters: { ...state.filtersAndSorters, [data.key]: data.value } })),
  changeFiltersByUrl: (data: any) => set(() => ({ filtersAndSorters: data })),

  /* --------------- */
  store: 'dropi',
  changeStore: (data: string) => set(() => ({ store: data })),

  /* -------------------- */

  followedProduct: null,
  changeFollowedProduct: (data: ProductFollow) => set(() => ({ followedProduct: data })),

  /* ---------------------- */

  folloingProducts: [],
  changeFollowingProducts: (data: FollowingProducts[]) => set(() => ({ folloingProducts: data })),

  filteredFolloingProducts: [],
  changeFilteredFollowingProducts: (data: ProductFollow[]) => set(() => ({ filteredFolloingProducts: data })),

  filtersAndSortersFollow,
  changeFiltersAndSortersFollow: (data: changeFiltersFollowProps) => set((state) => ({ filtersAndSortersFollow: { ...state.filtersAndSortersFollow, [data.key]: data.value } })),

  /* ---------------------- */

  reset: () => set(() => ({ filtersAndSorters })),
  resetFollow: () => set(() => ({ filtersAndSortersFollow }))
}))
