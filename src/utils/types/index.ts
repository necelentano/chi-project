export type TStoreUser = {
  email: string;
  name: string;
  photo: string;
} | null;

export type TAuthError = {
  readonly code: string;
  readonly customData: object;
  readonly name: string;
};
