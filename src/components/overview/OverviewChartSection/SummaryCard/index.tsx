import { Typography, Box } from "@mui/material";

type TOverviewCardProps = {
  title: string;
  data: string;
};

const SummaryCard = ({ title, data }: TOverviewCardProps) => {
  return (
    <Box
      sx={{
        py: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "1px solid #DFE0EB",
      }}
    >
      <Typography
        sx={{ color: "#9FA2B4", fontSize: "16px", fontWeight: "600" }}
      >
        {title}
      </Typography>
      <Typography
        sx={{ color: "#252733", fontSize: "24px", fontWeight: "700" }}
      >
        {data}
      </Typography>
    </Box>
  );
};

export default SummaryCard;
