export type SessionTypes = {
  accessToken: string;
  expires: string;
  user: User;
  error?: string;
};

export interface UserMembership {
  period: number;
  x_ray_credits: number;
  status: string;
}

export type User = {
  userID: string;
  email: string;
  name: string;
  image: string;
  roles: string[];
  membership: UserMembership;
};
