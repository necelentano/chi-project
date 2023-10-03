import { Paper, Typography, Box, useMediaQuery } from "@mui/material";

import OverviewAreaChart from "./AreaChart";
import OverviewSummary from "./OverviewSummary";

const OverviewChartSection = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Paper
      variant="outlined"
      sx={[
        {
          bgcolor: "#FFFFFF",
          border: "1px solid #DFE0EB",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        },
        isMobile && {
          flexDirection: "column",
        },
      ]}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
            padding: "32px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "19px",
                fontWeight: "700",
                color: "#252733",
                mb: "4px",
              }}
            >
              Today's trend
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", color: "#9FA2B4" }}
            >
              as of 25 May 2019, 09:41 PM
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#9FA2B4",
                position: "relative",
                "&:before": {
                  content: '""',
                  display: "block",
                  height: "2px",
                  width: "16px",
                  bgcolor: "#3751FF",
                  position: "absolute",
                  top: "8px",
                  left: "-24px",
                },
              }}
            >
              Today
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#9FA2B4",
                position: "relative",
                ml: "48px",
                "&:before": {
                  content: '""',
                  display: "block",
                  height: "2px",
                  width: "16px",
                  bgcolor: "#DFE0EB",
                  position: "absolute",
                  top: "8px",
                  left: "-24px",
                },
              }}
            >
              Yesterday
            </Typography>
          </Box>
        </Box>
        <Box>
          <OverviewAreaChart />
        </Box>
      </Box>
      <Box
        sx={[
          {
            maxWidth: "340px",
            width: "100%",
            borderLeft: "1px solid #DFE0EB",
            "& .MuiBox-root:last-of-type": {
              borderBottom: 0,
            },
          },
          isMobile && {
            maxWidth: "100%",
            borderLeft: "none",
            "& .MuiBox-root:first-of-type": {
              borderTop: "1px solid #DFE0EB",
            },
          },
        ]}
      >
        <OverviewSummary />
      </Box>
    </Paper>
  );
};

export default OverviewChartSection;
