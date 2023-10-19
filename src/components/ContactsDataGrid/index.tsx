import { Box, Avatar, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridSortModel } from "@mui/x-data-grid";

import { useEffect, useState } from "react";

import CustomToolbar from "./CustomToolbar";
import ActionsCell from "./ActionsCell";
import { contactsData } from "../../data/contactsData";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { sortContactsByDate } from "../../utils/helpers";

dayjs.extend(relativeTime);

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 3,
    minWidth: 350,
    headerClassName: "datagrid-header-row",
    renderCell: (params) => (
      <Box sx={{ display: "flex", alignItems: "center", ml: "32px" }}>
        <Avatar src={params.row.photo} sx={{ mr: "32px" }} />
        <Box>
          <Typography
            sx={{
              color: "#252733",
              fontSize: "14px",
              fontWeight: 600,
              mb: "4px",
            }}
          >
            {params.row.name}
          </Typography>
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
        <Typography
          sx={{
            color: "#252733",
            fontSize: "14px",
            fontWeight: 600,
            mb: "4px",
          }}
        >
          {params.row.email}
        </Typography>
      </Box>
    ),
    valueGetter: (params) => params.row.email,
  },
  {
    field: "address",
    headerName: "Address",
    flex: 2,
    //minWidth: 400,
    renderCell: (params) => (
      <Box
        sx={{
          //width: "400px",
          overflowWrap: "break-word",
        }}
      >
        <Typography
          sx={{
            color: "#252733",
            fontSize: "14px",
            fontWeight: 600,
            mb: "4px",

            whiteSpace: "wrap",
          }}
        >
          {params.row.address}
        </Typography>
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
        <Typography
          sx={{
            color: "#252733",
            fontSize: "14px",
            fontWeight: 600,
            mb: "4px",
          }}
        >
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

const ContactsDataGrid = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: "createdAt",
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
      rows={!loading ? [] : contactsData}
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
        "& .MuiTablePagination-root:last-child": {
          py: "14px",
        },
      }}
    />
  );
};

export default ContactsDataGrid;
