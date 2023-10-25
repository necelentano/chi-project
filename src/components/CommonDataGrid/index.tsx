import { useMemo, useState } from "react";
import { DataGrid, GridColDef, GridSortModel } from "@mui/x-data-grid";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import CustomToolbar from "./CustomToolbar";

import { extractOptionFields } from "../../utils/helpers";
import { TAuthError, TSortModel } from "../../utils/types";

import { TFormTemplate } from "../forms/DynamicForm";

dayjs.extend(relativeTime);

type TCommonDataGridProps = {
  tableColumns: GridColDef[];
  tableData: any[];
  tableSortModel: TSortModel[];
  tableIsLoading: boolean;
  formTemplate: TFormTemplate;
  formSubmitHandler: () => void;
  formIsError: boolean;
  formError: TAuthError;
  formIsLoading: boolean;
  formButtonText: string;
};

const CommonDataGrid = ({
  tableColumns,
  tableData,
  tableSortModel,
  tableIsLoading,
  formTemplate,
  formSubmitHandler,
  formIsError,
  formError,
  formIsLoading,
  formButtonText,
}: TCommonDataGridProps) => {
  const [sortModel, setSortModel] = useState<GridSortModel>(tableSortModel);

  const [paginationModel, setPaginationModel] = useState<{
    pageSize: number;
    page: number;
  }>({
    pageSize: 8,
    page: 0,
  });

  const [filterButtonEl, setFilterButtonEl] =
    useState<HTMLButtonElement | null>(null);

  const sortOptionFields = useMemo(
    () => extractOptionFields(tableColumns),
    [tableColumns]
  );

  return (
    <DataGrid
      loading={tableIsLoading}
      autoHeight
      rowHeight={92}
      rows={tableIsLoading ? [] : tableData}
      columns={tableColumns}
      getRowId={(row) => row.id}
      slots={{
        toolbar: CustomToolbar,
      }}
      slotProps={{
        toolbar: {
          sortModel,
          setSortModel,
          setFilterButtonEl,
          sortOptionFields,
          formTemplate,
          formSubmitHandler,
          formIsError,
          formError,
          formIsLoading,
          formButtonText,
        },
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

export default CommonDataGrid;
