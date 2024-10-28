export type cardType = {
  title: string
  subtitle: string
  redirect: cardRedirect
  tutorial: string
  features: string[]
  isActive: boolean,
  img: any
}

type cardRedirect = {
  url: string,
  text: string,
  videoID?: string
}

export type cardsPropType = {
  card: cardType
}