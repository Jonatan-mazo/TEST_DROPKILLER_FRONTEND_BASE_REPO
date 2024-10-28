import {
  loginCO as login,
  changePasswordCO as changePassword,
  recoveryPasswordCO as recoveryPassword
} from "./byPages/login"
import {
  homepageCO as homepage,
  cardsCO as cards
} from "./byPages/home"
import {
  sideBarElemtsCO as sideBarElements,
  NavBarElementsCO as NavBarElements,
  mainHeaderEleCO as mainHeaderElements,
  modalUnfollowUICO as modalUnfollowUI
} from "./byPages/UIElements"
import {
  forbiddenCO as forbidden,
  forbiddenExpiredCO as forbiddenEx,
} from './byPages/forbidden'
import {
  advanceFiltersCO as advanceFiltersHead,
  paginationBarCO as paginationBar,
  tableTitleCO as tableTitle,
  notProductFoundCO as notFoundProducts
} from "./byPages/advanceFiltersHead"
import { advanceFiltersListCO as advanceFilterList } from "./byPages/advanceFilterList"
import {
  followPageFiltersCO as followPageFilters,
  followPageTableHeadCO as followPageTableHead,
  followPageProductsCO as followPageProducts
} from "./byPages/followPage"
import { detailPageCO as detailPage } from "./byPages/detailPage"
import { configPageCO as configPage } from "./byPages/configPage"
import { registerCO as register } from "./byPages/register"

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
