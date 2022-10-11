export type CreateUserType = {
  name: string;
  password: string;
  email: string;
  role: string;
};

export enum Role {
  ADMIN = 0,
  USER = 2,
  SOCIETY = 1,
}
