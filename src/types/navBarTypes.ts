export type listItemsTypeNavBar = {
  id: number;
  icon: string;
  text: string;
  route: string;
  isRedirection: boolean;
  isExternal: boolean
}

export type sessionTypes = {
  user: {
    name: string;
    image: string;
    email: string;
  };
}