import { Dispatch, SetStateAction } from "react";

export type ItemByRwoTypePropsFollow = {
  product: ProductFollow;
  key: string;
  itemSelected?: number;
  changeItemSelected?: Dispatch<SetStateAction<number>>;
  idx?: number;
};

export type ItemByRwoTypeProps = {
  product: Product;
  key: string;
  itemSelected?: number;
  changeItemSelected?: Dispatch<SetStateAction<number>>;
  idx: number;
};

export type returnObject = {
  error: Error | string | null;
  data: Product[] | [];
};

export type FollowingProducts = {
  _id: string;
  productId: ProductFollow;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export enum SimilarityType {
  PRIMARY_LEVEL = "PRIMARY_LEVEL",
  SECONDARY_LEVEL = "SECONDARY_LEVEL",
  TERTIARY_LEVEL = "TERTIARY_LEVEL",
}

export interface Product {
  uuid: string;
  createdAt: string;
  country: string;
  externalId: string;
  name: string;
  updatedAt: string;
  categories: Category[];
  salePrice: number;
  gallery: Image[];
  __v: number;
  provider: Provider;
  supplierVerified: boolean;
  totalSalesAmount: number;
  salesLast7Days: number;
  salesLast30Days: number;
  stock: number;
  soldUnits: number;
  soldUnitsLast7Days: number;
  soldUnitsLast30Days: number;
  suggestedPrice: number;
  isFollowed: boolean;
  history?: any;
  profit: number;
  similarityType?: SimilarityType;
  platform: string
}

export interface ProductFollow {
  uuid: string;
  createdAt: string;
  country: string;
  externalId: string;
  name: string;
  updatedAt: string;
  categories: Category[];
  salePrice: number;
  gallery: Image[];
  __v: number;
  provider: Provider;
  supplierVerified: boolean;
  totalSalesAmount: number;
  salesLast7Days: number;
  salesLast30Days: number;
  stock: number;
  soldUnits: number;
  soldUnitsLast7Days: number;
  soldUnitsLast30Days: number;
  suggestedPrice: number;
  isFollowed: boolean;
  history?: any;
  profit: number;
  platform: string;
  totalSoldUnits: number
}

export interface Category {
  name: string;
  externalProductId: string;
  _id: string;
}

export interface Image {
  url: string;
  sourceUrl: string;
  externalProductId: string;
  _id: string;
}

export interface Provider {
  externalId: string;
  name: string;
  verified: boolean;
  _id: string;
}
