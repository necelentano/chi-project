import { useMemo, useState } from "react";
import { DataGrid, GridColDef, GridSortModel } from "@mui/x-data-grid";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import CustomToolbar from "./CustomToolbar";

import { extractOptionFields } from "../../utils/helpers";
import { TAuthError, TSortModel } from "../../utils/types";

import { TFormTemplate } from "../forms/DynamicForm";

import styles from "./styles";

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
          sx: styles.panel,
        },
      }}
      sortModel={sortModel}
      disableColumnMenu
      disableRowSelectionOnClick
      disableColumnSelector
      pageSizeOptions={[8, 16, 32]}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      sx={styles.datagrid}
    />
  );
};

export default CommonDataGrid;
