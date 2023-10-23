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
import FilterIcon from "../../../assets/filterIcon.svg?react";
import SortIcon from "../../../assets/sortIcon.svg?react";
import DashModal from "../../DashModal";

import { setModalOpen } from "../../../store/modalSlice";
import DynamicForm from "../../forms/DynamicForm";
import { addTicketFormData } from "../../forms/formsData/addTicket";
import { TAuthError } from "../../../utils/types";

type TCustomToolbarProps = {
  sortModel: GridSortModel;
  setSortModel: Dispatch<SetStateAction<GridSortModel>>;
  setFilterButtonEl: Ref<HTMLButtonElement>;
};

const CustomToolbar = ({
  sortModel,
  setSortModel,
  setFilterButtonEl,
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
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Box sx={{ display: "flex", ml: "32px" }}>
          <Box>
            <Button
              variant="text"
              size="small"
              startIcon={<SortIcon />}
              onClick={(event) => {
                setAnchorElMenu(event.currentTarget);
              }}
              sx={{
                mr: "32px",
                borderRadius: "8px",
                py: "6px",
                "&.MuiButton-text": {
                  color: "#4B506D",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  fontWeight: 600,
                },
              }}
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
                  {
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                      marginRight: "8px",
                    },
                  },
                  sortModel[0].sort === "asc" && {
                    bgcolor: "primaryLight.main",
                  },
                ]}
              >
                <ArrowUpwardIcon />
                Sort by ASC
              </MenuItem>
              <MenuItem
                onClick={() => setOrder("desc")}
                sx={[
                  {
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                      marginRight: "8px",
                    },
                  },
                  sortModel[0].sort === "desc" && {
                    bgcolor: "primaryLight.main",
                  },
                ]}
              >
                <ArrowDownwardIcon />
                Sort by DESC
              </MenuItem>
              <MenuItem>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Choose column
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={field}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="ticketDetails">ticketDetails</MenuItem>
                    <MenuItem value="customerName">customerName</MenuItem>
                    <MenuItem value="date">date</MenuItem>
                    <MenuItem value="priority">priority</MenuItem>
                  </Select>
                </FormControl>
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            <GridToolbarFilterButton
              ref={setFilterButtonEl}
              componentsProps={{
                button: {
                  startIcon: <FilterIcon />,
                },
              }}
              sx={{
                borderRadius: "8px",
                py: "6px",
                "&.MuiButton-text": {
                  color: "#4B506D",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  fontWeight: 600,
                },
                "& .MuiDataGrid-filterForm": {
                  flexDirection: "column",
                  top: "20px",
                },
              }}
            />
          </Box>
        </Box>

        <Box sx={{ pr: "32px", ml: "auto" }}>
          <Button
            variant="text"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => dispatch(setModalOpen(true))}
            sx={{
              borderRadius: "8px",
              py: "6px",
              "&.MuiButton-text": {
                textTransform: "inherit",
                fontSize: "14px",
                fontWeight: 600,
              },
            }}
          >
            Add ticket
          </Button>
        </Box>
      </Box>
      <DashModal
        isOpen={open}
        handleClose={() => dispatch(setModalOpen(false))}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <DynamicForm
            template={addTicketFormData}
            submitHandler={() => console.log("POST to Firebase")}
            isError={false}
            error={{} as TAuthError}
            isLoading={false}
          />
        </Box>
      </DashModal>
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
