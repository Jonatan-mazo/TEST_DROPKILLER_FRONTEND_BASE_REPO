import { SetStateAction } from "react"
import { FollowingProducts, Product, ProductFollow } from "./productsTypes"

export interface IconProps {
  src?: any;
  svg?: string;
  alt?: string;
  html?: any;
}

export type selectOptionsType = {
  value: string
  label: string
  leftIcon?: IconProps;
  rightIcon?: IconProps;
}

export type selectPropsType = {
  options: selectOptionsType[],
  placeHolder: string,
  type: 'sorting' | 'dorpdown',
  isMulti: boolean,
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
  isFollowed?: boolean
  ffID: 'filterByString' |
        'filterbyCategory' |
        'filterByCountries' |
        'sortBySales'
}

export type rangeFilterPropsTypes = {
  title: string
  labelText: string
  min: number
  max: number
  className: string
  ord: string
  setCleaning: React.Dispatch<SetStateAction<boolean>>
  cleaning: boolean
}

export type Filters = {
  filterByString: string | null,
  filterbyCategory: selectOptionsType[] | null,
  filterByProvider: selectOptionsType | null,
  filterbyPriceMin: number,
  filterbyPriceMax: number,
  filterBySales7Min: number,
  filterBySales7Max: number,
  filterBySales30Min: number,
  filterBySales30Max: number,
  filterByStockMin: number,
  filterByStockMax: number,
  filterByProfits7Min: number,
  filterByProfits7Max: number,
  filterByProfits30Min: number,
  filterByProfits30Max: number,
  filterByIncomesMin: number,
  filterByIncomesMax: number,
  filterByCountries: selectOptionsType | null,
  sortBySales: selectOptionsType | null,
  sortByProfits: selectOptionsType | null,
  sortByProvPrice: selectOptionsType | null,
}

export type FiltersFollow = {
  filterByString: string | null,
  filterbyCategory: selectOptionsType[] | null,
  filterByCountries: selectOptionsType | null,
  sortBySales: selectOptionsType | null,
}

export type changeFiltersProps = {
  key: string,
  value: selectOptionsType | selectOptionsType[] | string | null| number
}

export type changeFiltersFollowProps = {
  key: string,
  value: selectOptionsType | selectOptionsType[] | string | null
}

export type globalAdvanceFiltersStateType = {
  visualPageSelected: number | null
  loandingGlobalFilters: boolean
  headPageSize: number,
  headTotalProductsCount: number,
  headNumberOfPages: number,
  headPageSelected: number,
  changePageSize: (data: number) => void,
  changeTotalProductsCount: (data: number) => void,
  changeNumberOfPages: (data: number) => void,
  changePageSelected: (data: number) => void,
  changePageSlectedByInc: () => void,
  changePageSlectedByDec: () => void,
  changeOnFirstLoad: (data: globalDataTypes) => void,
  changeLoandingGlobalFilters: (data: boolean) => void,
  changeVisualPageSelected: (data: number | null) => void,

  /* ------- */
  globalProducts: Product[],
  changeGlobalProducts: (data: Product[]) => void,

  /* ------------ */
  datesRange: string,
  changeDatesRange: (data: string) => void,

  filtersAndSorters: Filters,
  changeFiltersAndSorters: (data: changeFiltersProps) => void,
  changeFiltersByUrl: (data: any) => void,

  /* ------------------ */
  store: string // 'dropi' | 'amazon' | 'mercadolibre' | '',
  changeStore: (data: string) => void

  /* ------------ */
  followedProduct: ProductFollow | null,
  changeFollowedProduct: (data: ProductFollow) => void

  folloingProducts: FollowingProducts[],
  changeFollowingProducts: (data: FollowingProducts[]) => void

  filteredFolloingProducts: ProductFollow[],
  changeFilteredFollowingProducts: (data: ProductFollow[]) => void

  filtersAndSortersFollow: FiltersFollow,
  changeFiltersAndSortersFollow: (data: changeFiltersFollowProps) => void,

  /* ======================================= */

  reset: () => void
  resetFollow: () => void
}

export type globalDataTypes = {
  error: string | null,
  data: string,
  total: number,
  totalPages: number
  currentPage: number
}
