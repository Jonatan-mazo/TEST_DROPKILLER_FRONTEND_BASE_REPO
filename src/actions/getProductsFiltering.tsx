'use server'

import { API_DEV_BACK } from "@/config"
import { Filters, globalDataTypes } from "@/types/filtersFieldsTypes"

type searchByNameProps = {
  filters: Filters
  token: string
  pageSize: number
  selectedPage: number
}

export async function searchByFilters({filters, token, pageSize, selectedPage}: searchByNameProps): Promise<globalDataTypes | undefined> {
  const responseError: globalDataTypes = {
    error: 'No props provided',
    data: '{}',
    total: 0,
    totalPages: 0,
    currentPage: 0
  }

  if (!filters) return responseError
  if (!token) return responseError
  if (isNaN(pageSize)) return responseError
  if (isNaN(selectedPage)) return responseError

  const isByString = filters.filterByString ? `search=${filters.filterByString}` : ''
  const isMostSold = filters.sortBySales && filters.sortBySales.value === 'bestSeller' ? `sort[0][field]=totalSoldUnits&sort[0][order]=desc` : ""
  const hasCategory = filters.filterbyCategory && filters.filterbyCategory.length > 0 ? filters.filterbyCategory.map(cat => cat.value).join('&categories[]=') : ''
  const isVerified = filters.filterByProvider && filters.filterByProvider.value === 'verified' ? `supplierVerified=true` : filters.filterByProvider && filters.filterByProvider.value === 'noVerified' ? "supplierVerified" : ''
  const hasMinPrice = filters.filterbyPriceMin > 0 ? `minPrice=${filters.filterbyPriceMin}` : ''
  const hasMaxPrice = filters.filterbyPriceMax > 0 ? `maxPrice=${filters.filterbyPriceMax}` : ''
  const hasMinStock = filters.filterByStockMin > 0 ? `minStock=${filters.filterByStockMin}` : ''
  const hasMaxStock = filters.filterByStockMax > 0 ? `maxStock=${filters.filterByStockMax}` : ''
  const hasMinSales7 = filters.filterBySales7Min > 0 ? `minSoldUnitsLast7Days=${filters.filterBySales7Min}` : ''
  const hasMaxSales7 = filters.filterBySales7Max > 0 ? `maxSoldUnitsLast7Days=${filters.filterBySales7Max}` : ''
  const hasMinSales30 = filters.filterBySales30Min > 0 ? `minSoldUnitsLast30Days=${filters.filterBySales30Min}` : ''
  const hasMaxSales30 = filters.filterBySales30Max > 0 ? `maxSoldUnitsLast30Days=${filters.filterBySales30Max}` : ''

  const hasMinProfits7 = filters.filterByProfits7Min > 0 ? `minSalesLast7Days=${filters.filterByProfits7Min}` : ''
  const hasMaxProfits7 = filters.filterByProfits7Max > 0 ? `maxSalesLast7Days=${filters.filterByProfits7Max}` : ''
  const hasMinProfits30 = filters.filterByProfits30Min > 0 ? `minSalesLast30Days=${filters.filterByProfits30Min}` : ''
  const hasMaxProfits30 = filters.filterByProfits30Max > 0 ? `maxSalesLast30Days=${filters.filterByProfits30Max}` : '' // Profit ganacias, ventas, soldUnits, facturacion salesamount

  const hasMinProfits = filters.filterByIncomesMin > 0 ? `minProfit=${filters.filterByIncomesMin}` : ''
  const hasMaxProfits = filters.filterByIncomesMax > 0 ? `maxProfit=${filters.filterByIncomesMax}` : ''

  // const hasBestProfits = filters.sortByProfits && filters.sortByProfits.value === 'bestProfits' ? `sortByProfit=true` : ""
  const hasCountry = filters.filterByCountries && filters.filterByCountries.value ? `country=${filters.filterByCountries.value}` : ''
  const hasBestProvPrice = filters.sortByProvPrice && filters.sortByProvPrice.value === 'highestProvPrice' ? `sort[0][field]=salePrice&sort[0][order]=desc` : filters.sortByProvPrice && filters.sortByProvPrice.value === 'lowestProvPrice' ? 'sort[0][field]=salePrice&sort[0][order]=asc' : ""

  const filtersString = `${isByString ? `${isByString}&` : ''}${isMostSold ? `${isMostSold}&` : ''}${hasCategory ? `categories[]=${hasCategory}&` : ''}${isVerified ? `${isVerified}&` : ""}${hasMinPrice ? `${hasMinPrice}&` : ''}${hasMaxPrice ? `${hasMaxPrice}&` : ''}${hasMinStock ? `${hasMinStock}&` : ''}${hasMaxStock ? `${hasMaxStock}&` : ''}${hasMinSales7 ? `${hasMinSales7}&` : ''}${hasMaxSales7 ? `${hasMaxSales7}&` : ''}${hasMinSales30 ? `${hasMinSales30}&` : ''}${hasMaxSales30 ? `${hasMaxSales30}&` : ''}`
  const filtersString_2 = `${hasMinProfits7 ? `${hasMinProfits7}&` : ''}${hasMaxProfits7 ? `${hasMaxProfits7}&` : ''}${hasMinProfits30 ? `${hasMinProfits30}&` : ''}${hasMaxProfits30 ? `${hasMaxProfits30}&` : ''}${hasMinProfits ? `${hasMinProfits}&` : ''}${hasMaxProfits ? `${hasMaxProfits}&` : ''}${hasCountry ? `${hasCountry}&` : ''}${hasBestProvPrice ? `${hasBestProvPrice}&` : ''}` // ${hasBestProfits ? `${hasBestProfits}&` : 'minSoldUnits=1&'}

  const finalString = filtersString + filtersString_2

  const resProducts: any = await getProductData({ token, pageSize, selectedPage, filters: finalString })

  if (resProducts.data) {
    const { data, paginationInfo } = resProducts.data
    return {
      error: null,
      data: JSON.stringify(data),
      total: paginationInfo.total,
      totalPages: Math.round(paginationInfo.total / pageSize) > 0 ? Math.round((paginationInfo.total / pageSize) + 1) : 1,
      currentPage: selectedPage,
    }
  } else {
    const response: globalDataTypes = {
      error: 'No products to return from redis',
      data: '{}',
      total: 0,
      totalPages: 0,
      currentPage: 0
    }

    return response
  }

}

type Props = {
  token: string
  pageSize: number
  selectedPage: number
  filters: string
}

const getProductData = async ({ token, pageSize, selectedPage, filters }: Props) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  }

  try {
    const page = (selectedPage - 1) * pageSize //offset=${page}
    const res = await fetch(`${API_DEV_BACK}/products?offset=${page}&limit=${pageSize}&${filters}`, { ...config, signal: AbortSignal.timeout(55000) })

    if (res.ok && res.status === 200 || res.status === 201) {
      const response = await res.json()
      return { data: response, error: null }
    } else {
      const response = await res.json()
      return { data: null, error: response.error }
    }
  } catch (error: any) {
    return { data: null, error: error.message }
  }
}
