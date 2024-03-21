import { useEffect, useState } from "react";

import SummaryCard from "../SummaryCard";
import mockedSummaryData from "../../../../data/summary";
import { Box, Skeleton } from "@mui/material";

import styles from "./styles";

const OverviewSummary = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const ContentLoaderItem = () => (
    <Box sx={styles.itemContainer}>
      <Box sx={styles.titleSekeltonWrapper}>
        <Skeleton animation="wave" height={30} width="100%" />
      </Box>
      <Box sx={styles.dataSkeletonWrapper}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={32}
          width={72}
          sx={styles.dataSkeleton}
        />
      </Box>
    </Box>
  );

  if (!loading) {
    return [0, 1, 2, 3, 4].map((item) => <ContentLoaderItem key={item} />);
  }

  return mockedSummaryData.map((item) => (
    <SummaryCard title={item.title} data={item.data} key={item.title} />
  ));
};

export default OverviewSummary;
