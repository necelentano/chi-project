const styles = {
  panel: {
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
  datagrid: {
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
    "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows": {
      color: "#9FA2B4",
      fontSize: "14px",
      fontWeight: 400,
    },
    "& .MuiTablePagination-root:last-child": {
      py: "14px",
    },
  },
};

export default styles;
