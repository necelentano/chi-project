import { Box, Typography } from "@mui/material";
import { TTicketItem } from "../../../../utils/types";

import styles from "./styles";

type TUnresolvedTicketsListItemProps = {
  item: TTicketItem;
};

const UnresolvedTicketsListItem = ({
  item,
}: TUnresolvedTicketsListItemProps) => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.ticketTypeText}>{item.ticketTypeName}</Typography>

      <Typography sx={styles.ticketQuantityText}>
        {item.ticketQuantity}
      </Typography>
    </Box>
  );
};

export default UnresolvedTicketsListItem;
