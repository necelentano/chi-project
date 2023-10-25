import { useState } from "react";

import { Box, Menu, MenuItem, IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TTicketDatagridItem } from "../../../utils/types";

type TActionCellProps = {
  row: TTicketDatagridItem;
};

const ActionsCell = ({ row }: TActionCellProps) => {
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLButtonElement>(
    null
  );
  const openMenu = Boolean(anchorElMenu);
  return (
    <Box>
      <IconButton
        onClick={(event) => {
          setAnchorElMenu(event.currentTarget);
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="menu-options"
        anchorEl={anchorElMenu}
        open={openMenu}
        onClose={() => {
          setAnchorElMenu(null);
        }}
      >
        <MenuItem
          onClick={() => console.log(`Ticket #${row.id} was edited`)}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 18,
              marginRight: "8px",
              color: "primary.main",
            },
          }}
        >
          <ModeEditIcon />
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => console.log(`Ticket #${row.id} was deleted`)}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 18,
              marginRight: "8px",
              color: "red",
            },
          }}
        >
          <DeleteIcon />
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ActionsCell;
