export interface CreateUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface UpdateUser {
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
  id: string | number;
}
