import { TicketPriorityEnum } from "../types";

export const sortTicketsByPriority = (a: string, b: string) => {
  return (
    TicketPriorityEnum[a as keyof typeof TicketPriorityEnum] -
    TicketPriorityEnum[b as keyof typeof TicketPriorityEnum]
  );
};
