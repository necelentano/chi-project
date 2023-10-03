import { Box, Typography } from "@mui/material";
import { TTicketItem } from "../../../../utils/types";

type TUnresolvedTicketsListItemProps = {
  item: TTicketItem;
};

const UnresolvedTicketsListItem = ({
  item,
}: TUnresolvedTicketsListItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        py: "18px",
        borderBottom: "1px solid #DFE0EB",
        minWidth: "100%",
        px: "32px",
      }}
    >
      <Box>
        <Typography
          sx={{ color: "#252733", fontSize: "14px", fontWeight: 600 }}
        >
          {item.ticketTypeName}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ color: "#9FA2B4", fontSize: "14px", fontWeight: 600 }}
        >
          {item.ticketQuantity}
        </Typography>
      </Box>
    </Box>
  );
};

export default UnresolvedTicketsListItem;
