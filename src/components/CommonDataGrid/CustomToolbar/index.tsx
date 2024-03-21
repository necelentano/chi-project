import {
  Box,
  Button,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

import { useState, useEffect, SetStateAction, Dispatch, Ref } from "react";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/redux";
import { GridSortModel } from "@mui/x-data-grid";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddIcon from "@mui/icons-material/Add";
import SortIcon from "../../../assets/sortIcon.svg?react";
import DashModal from "../../DashModal";

import { setModalOpen } from "../../../store/modalSlice";
import DynamicForm, { TFormTemplate } from "../../forms/DynamicForm";

import { TAuthError } from "../../../utils/types";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { BaseQueryFn, MutationDefinition } from "@reduxjs/toolkit/dist/query";
import { FieldValues } from "react-hook-form";

import styles from "./styles";

type TCustomToolbarProps = {
  sortModel: GridSortModel;
  setSortModel: Dispatch<SetStateAction<GridSortModel>>;
  setFilterButtonEl: Ref<HTMLButtonElement>;
  sortOptionFields: {
    value: string;
    text: string;
  }[];
  formTemplate: TFormTemplate;
  formSubmitHandler: MutationTrigger<
    MutationDefinition<
      FieldValues,
      BaseQueryFn,
      never,
      string | undefined,
      "api"
    >
  >;
  formIsError: boolean;
  formError: TAuthError;
  formIsLoading: boolean;
  formButtonText: string;
};

const CustomToolbar = ({
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
}: TCustomToolbarProps) => {
  const dispatch = useAppDispatch();

  const { open } = useAppSelector((state) => state.modal);
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLButtonElement>(
    null
  );
  const openMenu = Boolean(anchorElMenu);
  const [field, setField] = useState(sortModel[0].field);
  const [order, setOrder] = useState(sortModel[0].sort);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setField(event.target.value);
    setOrder("asc");
  };

  useEffect(() => {
    const newsortModel = { field, sort: order };
    setSortModel([newsortModel]);
  }, [field, order, setSortModel]);

  return (
    <GridToolbarContainer>
      <Box sx={styles.container}>
        <Box sx={styles.sortButtonWrapper}>
          <Box>
            <Button
              variant="text"
              size="small"
              startIcon={<SortIcon />}
              onClick={(event) => {
                setAnchorElMenu(event.currentTarget);
              }}
              sx={styles.sortButton}
            >
              Sort
            </Button>

            <Menu
              id="menu-options"
              anchorEl={anchorElMenu}
              open={openMenu}
              onClose={() => {
                setAnchorElMenu(null);
              }}
            >
              <MenuItem
                onClick={() => setOrder("asc")}
                sx={[
                  styles.menuItemIcon,
                  sortModel[0].sort === "asc" && styles.menuItemActive,
                ]}
              >
                <ArrowUpwardIcon />
                Sort by ASC
              </MenuItem>
              <MenuItem
                onClick={() => setOrder("desc")}
                sx={[
                  styles.menuItemIcon,
                  sortModel[0].sort === "desc" && styles.menuItemActive,
                ]}
              >
                <ArrowDownwardIcon />
                Sort by DESC
              </MenuItem>
              <MenuItem>
                <FormControl variant="standard" sx={styles.formControl}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Choose column
                  </InputLabel>
                  <Select
                    labelId="select-label"
                    id="select"
                    value={field}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {sortOptionFields?.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.text}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            <GridToolbarFilterButton
              ref={setFilterButtonEl}
              sx={styles.filterButton}
            />
          </Box>
        </Box>

        <Box sx={styles.filterButtonWrapper}>
          <Button
            variant="text"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => dispatch(setModalOpen(true))}
            sx={styles.formButton}
          >
            {formButtonText}
          </Button>
        </Box>
      </Box>
      <DashModal
        isOpen={open}
        handleClose={() => dispatch(setModalOpen(false))}
      >
        <Box sx={styles.modalFormContainer}>
          <DynamicForm
            template={formTemplate}
            submitHandler={formSubmitHandler}
            isError={formIsError}
            error={formError}
            isLoading={formIsLoading}
          />
        </Box>
      </DashModal>
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
