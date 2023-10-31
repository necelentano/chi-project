import { Avatar, Box, Chip, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import ActionsCell from "../../../components/CommonDataGrid/ActionsCell";
import {
  sortContactsByDate,
  sortTicketsByPriority,
} from "../../../utils/helpers";

import styles from "./columnsStyles";

dayjs.extend(relativeTime);

export const ticketColumns: GridColDef[] = [
  {
    field: "ticketDetails",
    headerName: "Ticket details",
    flex: 4,
    minWidth: 500,
    headerClassName: "datagrid-header-row",
    renderCell: (params) => (
      <Box sx={styles.ticketContainer}>
        <Avatar src={params.row.byUser.photo} sx={styles.avatar} />
        <Box>
          <Typography sx={styles.primaryText}>{params.row.details}</Typography>
          <Typography sx={styles.secondaryText}>
            Updated {dayjs().to(dayjs(params.row.updatedAt))}
          </Typography>
        </Box>
      </Box>
    ),
    valueGetter: (params) => params.row.details,
  },
  {
    field: "customerName",
    headerName: "Customer name",
    flex: 2,
    minWidth: 200,
    renderCell: (params) => (
      <Box>
        <Typography sx={styles.primaryText}>
          {params.row.byUser.name}
        </Typography>
        <Typography sx={styles.secondaryText}>
          on {dayjs(params.row.byUser.createdAt).format("DD.MM.YYYY")}
        </Typography>
      </Box>
    ),
    valueGetter: (params) => params.row.byUser.name,
  },
  {
    field: "date",
    headerName: "Date",
    flex: 2,
    minWidth: 200,
    sortComparator: sortContactsByDate,
    renderCell: (params) => (
      <Box>
        <Typography sx={styles.primaryText}>
          {dayjs(params.row.createdAt).format("MMMM DD, YYYY")}
        </Typography>
        <Typography sx={styles.secondaryText}>
          {dayjs(params.row.createdAt).format("h:mm A")}
        </Typography>
      </Box>
    ),
    valueGetter: (params) => dayjs(params.row.createdAt).format("MMMM D, YYYY"),
  },
  {
    field: "priority",
    headerName: "Priority",
    flex: 2,
    minWidth: 200,
    sortComparator: sortTicketsByPriority,
    renderCell: (params) => {
      const { priority } = params.row;

      let bgcolor, text;
      switch (priority) {
        case "low":
          bgcolor = "#FEC400";
          text = "low";
          break;
        case "normal":
          bgcolor = "#29CC97";
          text = "normal";
          break;
        case "high":
          bgcolor = "#F12B2C";
          text = "high";
          break;
        default:
          bgcolor = "#29CC97";
          text = "normal";
      }
      return (
        <Box>
          <Chip
            label={text}
            sx={{
              bgcolor,
              ...styles.chip,
            }}
          />
        </Box>
      );
    },
    valueGetter: (params) => params.row.priority,
  },
  {
    field: "actions",
    headerName: "",
    sortable: false,
    filterable: false,
    minWidth: 50,
    renderCell: (params) => {
      return <ActionsCell row={params.row} />;
    },
  },
];
