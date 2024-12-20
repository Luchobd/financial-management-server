export interface Email {
    name?: string;
    email?: string;
    key?: string;
    type?: "register" | "forgotten" | "change" | undefined;
  }
  