import { Box } from "@mui/material";
import UnresolvedTicketsListItem from "./UnresolvedTicketsListItem";
import ticketsData from "../../../data/tickets";
import { useEffect, useState } from "react";
import UnresolvedTicketItemSkeleton from "./UnresolvedTicketItemSkeleton";

const UnresolvedTicketsList = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const contentLoader = (
    <Box
      sx={{
        "& .MuiBox-root:last-of-type": {
          borderBottom: 0,
        },
      }}
    >
      {[0, 1, 2, 3].map((item) => (
        <UnresolvedTicketItemSkeleton key={item} />
      ))}
    </Box>
  );

  if (!loading) {
    return contentLoader;
  }

  return (
    <Box
      sx={{
        "& .MuiBox-root:last-of-type": {
          borderBottom: 0,
        },
      }}
    >
      {ticketsData.map((item) => (
        <UnresolvedTicketsListItem item={item} key={item.ticketTypeId} />
      ))}
    </Box>
  );
};

export default UnresolvedTicketsList;
