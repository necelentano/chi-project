import { Paper, Skeleton } from "@mui/material";

const OverviewCardSkeleton = () => {
  return (
    <Paper
      variant="outlined"
      sx={{
        bgcolor: "#FFFFFF",
        border: "1px solid #DFE0EB",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        py: "32px",
        ":hover": {
          borderColor: "primary.main",
          boxShadow: "#DDE2FF 0px 0px 0px 3px",
          "& .MuiTypography-root": { color: "primary.main" },
        },
      }}
    >
      <Skeleton animation="wave" height={30} width="30%" sx={{ mb: "10px" }} />
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={46}
        width={72}
        sx={{ borderRadius: "8px", mb: "3px" }}
      />
    </Paper>
  );
};

export default OverviewCardSkeleton;
