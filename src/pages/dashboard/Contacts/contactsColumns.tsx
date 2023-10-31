import { Avatar, Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { GridColDef } from "@mui/x-data-grid";

import ActionsCell from "../../../components/CommonDataGrid/ActionsCell";
import { sortContactsByDate } from "../../../utils/helpers";
import styles from "./columnsStyles";

dayjs.extend(relativeTime);

export const contactColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 3,
    minWidth: 350,
    headerClassName: "datagrid-header-row",
    renderCell: (params) => (
      <Box sx={styles.nameContainer}>
        <Avatar src={params.row.photo} sx={styles.avatar} />
        <Box>
          <Typography sx={styles.text}>{params.row.name}</Typography>
        </Box>
      </Box>
    ),
    valueGetter: (params) => params.row.name,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 2,
    minWidth: 200,
    renderCell: (params) => (
      <Box>
        <Typography sx={styles.text}>{params.row.email}</Typography>
      </Box>
    ),
    valueGetter: (params) => params.row.email,
  },
  {
    field: "address",
    headerName: "Address",
    flex: 4,
    minWidth: 400,
    renderCell: (params) => (
      <Box sx={styles.addressContainer}>
        <Typography sx={styles.addressText}>{params.row.address}</Typography>
      </Box>
    ),
    valueGetter: (params) => params.row.address,
  },
  {
    field: "createdAt",
    headerName: "Created at",
    flex: 2,
    minWidth: 200,
    sortComparator: sortContactsByDate,
    renderCell: (params) => (
      <Box>
        <Typography sx={styles.text}>
          {dayjs(params.row.createdAt).format("MMMM D, YYYY")}
        </Typography>
      </Box>
    ),
    valueGetter: (params) => dayjs(params.row.createdAt).format("MMMM D, YYYY"),
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
