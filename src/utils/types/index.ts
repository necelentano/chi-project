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
  priority: TaskLabelEnum;
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

export enum InputTypeEnum {
  Text = "text",
  Select = "select",
  DateTimePicker = "dateTimePicker",
  ImageUpload = "imageUpload",
}

export type TSelectOptions = { value: "low" | "normal" | "high"; text: string };

export type TField = {
  name: string;
  placeholder: string;
  label: string;
  isPassword: boolean;
  inputType: string;
  textFieldType: string;
  options: TSelectOptions[] | undefined;
};

export type TFooterItem = {
  text: string;
  linkText: string;
  to: string;
};

export type TSortModel = {
  field: string;
  sort: "asc" | "desc";
};

export enum TaskLabelEnum {
  Default = "default",
  New = "new",
  Urgent = "urgent",
}
