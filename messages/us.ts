import {
  loginUS as login,
  changePasswordUS as changePassword,
  recoveryPasswordUS as recoveryPassword
} from "./byPages/login"
import {
  homepageUS as homepage,
  cardsUS as cards
} from "./byPages/home"
import {
  sideBarElemtsUS as sideBarElements,
  NavBarElementsUS as NavBarElements,
  mainHeaderEleUS as mainHeaderElements,
  modalUnfollowUIUS as modalUnfollowUI
} from "./byPages/UIElements"
import {
  forbiddenUS as forbidden,
  forbiddenExpiredUS as forbiddenEx,
} from './byPages/forbidden'
import {
  advanceFiltersUS as advanceFiltersHead,
  paginationBarUS as paginationBar,
  tableTitleUS as tableTitle,
  notProductFoundUS as notFoundProducts
} from "./byPages/advanceFiltersHead"
import { advanceFiltersListUS as advanceFilterList } from "./byPages/advanceFilterList"
import {
  followPageFiltersUS as followPageFilters,
  followPageTableHeadUS as followPageTableHead,
  followPageProductsUS as followPageProducts
} from "./byPages/followPage"
import { detailPageUS as detailPage } from "./byPages/detailPage"
import { configPageUS as configPage } from "./byPages/configPage"
import { registerUS as register } from "./byPages/register"


/* -------------------------------------------- */

const mainObj = {
  login,
  changePassword,
  recoveryPassword,
  homepage,
  cards,
  sideBarElements,
  NavBarElements,
  forbidden,
  mainHeaderElements,
  advanceFiltersHead,
  paginationBar,
  tableTitle,
  notFoundProducts,
  advanceFilterList,
  followPageFilters,
  followPageTableHead,
  followPageProducts,
  detailPage,
  modalUnfollowUI,
  configPage,
  register,
  forbiddenEx
}

export default mainObj