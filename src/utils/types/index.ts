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

export enum TicketPriorityEnum {
  low,
  normal,
  high,
}

export type TTicketDatagridItem = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  details: string;
  priority: TicketPriorityEnum;
  byUser: {
    id: number;
    createdAt: Date;
    name: string;
    photo: string;
  };
};
