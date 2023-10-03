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

export type TTaskItem = {
  id: number;
  taskText: string;
  completed: boolean;
  priority: "default" | "new" | "urgent";
};

export type TTicketItem = {
  ticketTypeId: number;
  ticketTypeName: string;
  ticketQuantity: number;
};
