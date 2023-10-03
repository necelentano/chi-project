import { useEffect, useState } from "react";

import SummaryCard from "../SummaryCard";
import mockedSummaryData from "../../../../data/summary";
import { Box, Skeleton } from "@mui/material";

const OverviewSummary = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const ContentLoaderItem = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: "30px",
        pb: "32px",
        borderBottom: "1px solid #DFE0EB",
        minWidth: "100%",
        px: "32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minWidth: "50%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Skeleton animation="wave" height={30} width="100%" />
        </Box>
      </Box>
      <Box sx={{ width: 72 }}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={32}
          width={72}
          sx={{ borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );

  if (!loading) {
    return [0, 1, 2, 3, 5].map((item) => <ContentLoaderItem key={item} />);
  }

  return mockedSummaryData.map((item) => (
    <SummaryCard title={item.title} data={item.data} key={item.title} />
  ));
};

export default OverviewSummary;
