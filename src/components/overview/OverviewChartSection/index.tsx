import { Paper, Typography, Box, useMediaQuery } from "@mui/material";

import OverviewAreaChart from "./AreaChart";
import OverviewSummary from "./OverviewSummary";

import styles from "./styles";
import dayjs from "dayjs";

type TOverviewChartSectionProps = {
  currentDate: string | number | Date | dayjs.Dayjs | null | undefined;
};

const OverviewChartSection = ({ currentDate }: TOverviewChartSectionProps) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Paper
      variant="outlined"
      sx={[styles.paper, isMobile && styles.paperIsMobile]}
    >
      <Box sx={styles.chartSectionWrapper}>
        <Box
          sx={[
            styles.chartSectionHeaderWrapper,
            isMobile && styles.chartSectionHeaderWrapperIsMobile,
          ]}
        >
          <Box sx={[isMobile && styles.leftSideWrapper]}>
            <Typography sx={styles.leftSideTitle}>Today's trend</Typography>
            <Typography sx={styles.leftSideDate}>
              as of {dayjs(currentDate).format("D MMMM YYYY, h:mm A")}
            </Typography>
          </Box>
          <Box sx={styles.colorIndicatorWrapper}>
            <Typography sx={styles.colorIndicator("#3751FF")}>Today</Typography>
            <Typography sx={styles.colorIndicator("#DFE0EB")}>
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
          styles.overviewSummary,
          isMobile && styles.overviewSummaryIsMobile,
        ]}
      >
        <OverviewSummary />
      </Box>
    </Paper>
  );
};

export default OverviewChartSection;
