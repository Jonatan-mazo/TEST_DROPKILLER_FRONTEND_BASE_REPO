import React from 'react'

export type subItemType = {
  text: string;
  subRoute: string;
  id: number;
}

export type listItemsType = {
  id: number;
  icon: string;
  text: string;
  subItems?: subItemType[];
  isExpansible: boolean;
  route: string;
  isNew: boolean
}

export type ItemsTypeProps = {
  itemContent: listItemsType;
  idx: number;
}

export type iconsType = {
  [key: string]: React.JSX.Element;
}

export type subItemPropsType = {
  sub: subItemType;
  itemID: number;
}

export type globalSideBarStateType = {
  isOpenSideBar: boolean,
  itemSelected: number,
  subItemSelected: number,
  itemExpanded: number,
  changeItemExpanded: (data: number) => void,
  changeIsOpenSideBar: (data: boolean) => void,
  changeItemSelected: (data: number) => void,
  changeSubItemSelected: (data: number) => void
}

export type svgPropsType = {
  className: string;
  size: number;
}
