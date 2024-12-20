export interface User {
    fullName: string;
    email: string;
    password: string;
    validationKey: string;
  }

  export interface Login {
    email: string;
    password: string;
}