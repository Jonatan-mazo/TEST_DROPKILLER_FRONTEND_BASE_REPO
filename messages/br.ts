import {
  loginBR as login,
  changePasswordBR as changePassword,
  recoveryPasswordBR as recoveryPassword
} from "./byPages/login"
import {
  homepageBR as homepage,
  cardsBR as cards
} from "./byPages/home"
import {
  sideBarElemtsBR as sideBarElements,
  NavBarElementsBR as NavBarElements,
  mainHeaderEleBR as mainHeaderElements,
  modalUnfollowUIBR as modalUnfollowUI
} from "./byPages/UIElements"
import {
  forbiddenBR as forbidden,
  forbiddenExpiredBR as forbiddenEx,
} from './byPages/forbidden'
import {
  advanceFiltersBR as advanceFiltersHead,
  paginationBarBR as paginationBar,
  tableTitleBR as tableTitle,
  notProductFoundBR as notFoundProducts
} from "./byPages/advanceFiltersHead"
import { advanceFiltersListBR as advanceFilterList } from "./byPages/advanceFilterList"
import {
  followPageFiltersBR as followPageFilters,
  followPageTableHeadBR as followPageTableHead,
  followPageProductsBR as followPageProducts
} from "./byPages/followPage"
import { detailPageBR as detailPage } from "./byPages/detailPage"
import { configPageBR as configPage } from "./byPages/configPage"
import { registerBR as register } from "./byPages/register"

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
