import { cardType } from "@/types/homeTypes";
import FiltersImage from '@/assets/images/filters.png'

export const  cards: cardType[] = [
  {
    title: 'card_title_1',
    subtitle: 'card_subTitle_1',
    redirect: {
      url: '/dashboard/products/filters',
      text: 'card_redirect_text_1',
      videoID: 'omkkq3l1gm'
    },
    tutorial: '',
    features: [
      'card_subItem_features_filtros_1',
      'card_subItem_features_filtros_2',
    ],
    isActive: true,
    img: FiltersImage
  },
  {
    title: 'card_title_2',
    subtitle: 'card_subTitle_2',
    redirect: {
      url: '/dashboard/products/follows',
      text: 'card_redirect_text_2',
      videoID: 'oghhgmgh0v'
    },
    tutorial: '',
    features: [
      'card_subItem_features_tracking_1',
      'card_subItem_features_tracking_2',
    ],
    isActive: true,
    img: FiltersImage
  },
  {
    title: 'card_title_3',
    subtitle: 'card_subTitle_3',
    redirect: {
      url: 'https://chromewebstore.google.com/detail/dropkiller/jadkpbgjjkffbpijalbeoaacjppljnld',
      text: 'card_redirect_text_3',
      videoID: '9snfcyczlv'
    },
    tutorial: '',
    features: [
      'card_subItem_features_extension_1',
      'card_subItem_features_extension_2',
    ],
    isActive: true,
    img: FiltersImage
  },
  {
    title: 'card_title_4',
    subtitle: 'card_subTitle_4',
    redirect: {
      url: '/dashboard/x-ray',
      text: 'card_redirect_text_4'
    },
    tutorial: '',
    features: [
      'card_subItem_features_xray_1',
      'card_subItem_features_xray_2',
    ],
    isActive: false,
    img: FiltersImage
  },/* 
  {
    title: 'card_title_5',
    subtitle: 'card_subTitle_5',
    redirect: {
      url: '',
      text: 'card_redirect_text_5'
    },
    tutorial: '',
    features: [
      'card_subItem_features_featured_1',
      'card_subItem_features_featured_2',
    ],
    isActive: false,
    img: FiltersImage
  },
  {
    title: 'card_title_6',
    subtitle: 'card_subTitle_6',
    redirect: {
      url: '',
      text: 'card_redirect_text_6'
    },
    tutorial: '',
    features: [
      'card_subItem_features_supplier_1',
      'card_subItem_features_supplier_2',
    ],
    isActive: false,
    img: FiltersImage
  }, */
]