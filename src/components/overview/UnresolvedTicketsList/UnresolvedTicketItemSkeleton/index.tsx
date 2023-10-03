import { Box, Skeleton } from "@mui/material";

const UnresolvedTicketItemSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pt: "13px",
        pb: "14px",
        borderBottom: "1px solid #DFE0EB",
        minWidth: "100%",
        px: "32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minWidth: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Skeleton animation="wave" height={30} width="100%" />
        </Box>
      </Box>
    </Box>
  );
};

export default UnresolvedTicketItemSkeleton;
