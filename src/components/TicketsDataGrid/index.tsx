import { Box, Avatar, Typography, Chip } from "@mui/material";
import { DataGrid, GridColDef, GridSortModel } from "@mui/x-data-grid";

import { useEffect, useState } from "react";

import CustomToolbar from "./CustomToolbar";
import ActionsCell from "./ActionsCell";
import { ticketsData } from "../../data/ticketsData";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { sortTicketsByPriority } from "../../utils/helpers";
dayjs.extend(relativeTime);

const columns: GridColDef[] = [
  {
    field: "ticketDetails",
    headerName: "Ticket details",
    flex: 4,
    minWidth: 500,
    headerClassName: "datagrid-header-row",
    renderCell: (params) => (
      <Box sx={{ display: "flex", alignItems: "center", ml: "32px" }}>
        <Avatar src={params.row.byUser.photo} sx={{ mr: "32px" }} />
        <Box>
          <Typography
            sx={{
              color: "#252733",
              fontSize: "14px",
              fontWeight: 600,
              mb: "4px",
            }}
          >
            {params.row.details}
          </Typography>
          <Typography
            sx={{ color: "#C5C7CD", fontSize: "12px", fontWeight: 400 }}
          >
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
        <Typography
          sx={{
            color: "#252733",
            fontSize: "14px",
            fontWeight: 600,
            mb: "4px",
          }}
        >
          {params.row.byUser.name}
        </Typography>
        <Typography
          sx={{ color: "#C5C7CD", fontSize: "12px", fontWeight: 400 }}
        >
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
    renderCell: (params) => (
      <Box>
        <Typography
          sx={{
            color: "#252733",
            fontSize: "14px",
            fontWeight: 600,
            mb: "4px",
          }}
        >
          {dayjs(params.row.createdAt).format("MMMM DD, YYYY")}
        </Typography>
        <Typography
          sx={{ color: "#C5C7CD", fontSize: "12px", fontWeight: 400 }}
        >
          {dayjs(params.row.createdAt).format("h:mm A")}
        </Typography>
      </Box>
    ),
    valueGetter: (params) => params.row.createdAt,
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
      }
      return (
        <Box>
          <Chip
            label={text}
            sx={{
              bgcolor,
              textTransform: "uppercase",
              fontSize: "11px",
              fontWeight: 700,
              color: "#FFFFFF",
              px: "6px",
              py: "4px",
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

const TicketsDataGrid = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: "priority",
      sort: "desc",
    },
  ]);

  const [paginationModel, setPaginationModel] = useState<{
    pageSize: number;
    page: number;
  }>({
    pageSize: 8,
    page: 0,
  });

  const [filterButtonEl, setFilterButtonEl] =
    useState<HTMLButtonElement | null>(null);

  return (
    <DataGrid
      loading={!loading}
      autoHeight
      rowHeight={92}
      rows={!loading ? [] : ticketsData}
      columns={columns}
      getRowId={(row) => row.id}
      slots={{
        toolbar: CustomToolbar,
      }}
      slotProps={{
        toolbar: { sortModel, setSortModel, setFilterButtonEl },
        panel: {
          anchorEl: filterButtonEl,
          sx: {
            "& .MuiDataGrid-panel": {
              border: "1 px solid red",
              bgcolor: "red",
            },
            "& .MuiDataGrid-filterForm": {
              flexDirection: "column",
            },
            "& .MuiButtonBase-root": {
              display: "none",
            },
            "& .MuiPaper-root": {
              maxWidth: "200px",
              minWidth: "200px",
              "& .MuiDataGrid-paper": {
                maxWidth: "200px",
                minWidth: "200px",
              },
            },
          },
        },
      }}
      sortModel={sortModel}
      disableColumnMenu
      disableRowSelectionOnClick
      disableColumnSelector
      pageSizeOptions={[8, 16, 32]}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      sx={{
        width: "100%",
        bgcolor: "#FFFFFF",
        pt: "32px",
        borderRadius: "8px",

        "& .MuiDataGrid-columnHeader": {
          color: "#9FA2B4",
          fontSize: "14px",
          fontWeight: 700,
          cursor: "default",
        },
        "& .datagrid-header-row": {
          pl: "32px",
        },
        "& .MuiDataGrid-toolbarContainer": {
          pb: "47px",
        },
        "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus-within":
          {
            outline: "none !important",
          },
        "& .MuiDataGrid-columnSeparator": {
          display: "none",
        },
        "& .MuiDataGrid-columnHeader--sortable": {
          ":hover": {
            "& .MuiDataGrid-iconButtonContainer": {
              display: "none",
            },
          },
        },
        "& .MuiDataGrid-columnHeader--sorted": {
          ":hover": {
            "& .MuiDataGrid-iconButtonContainer": {
              display: "flex",
              cursor: "default",
            },
          },
        },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "rgba(55,81,255, 0.04)",
        },
        "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
          {
            color: "#9FA2B4",
            fontSize: "14px",
            fontWeight: 400,
          },
        // "& .MuiDataGrid-footerContainer": {
        //   borderTop: "none",
        // },
        "& .MuiTablePagination-root:last-child": {
          py: "14px",
        },
      }}
    />
  );
};

export default TicketsDataGrid;
