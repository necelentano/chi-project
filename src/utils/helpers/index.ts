import { GridColDef } from "@mui/x-data-grid";
import { TicketPriorityEnum } from "../types";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const sortTicketsByPriority = (a: string, b: string) => {
  return (
    TicketPriorityEnum[a as keyof typeof TicketPriorityEnum] -
    TicketPriorityEnum[b as keyof typeof TicketPriorityEnum]
  );
};

type TDate = string | number | dayjs.Dayjs | Date | null | undefined;

export const sortContactsByDate = (a: TDate, b: TDate) => {
  const aTimestamp = dayjs(a, "MMMM D, YYYY");
  const bTimestamp = dayjs(b, "MMMM D, YYYY");

  return aTimestamp.valueOf() - bTimestamp.valueOf();
};

export const extractOptionFields = (columns: GridColDef[]) => {
  return columns.map((column) => ({
    value: column.field,
    text: column.headerName,
  }));
};
