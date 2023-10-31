import { Grid, Container } from "@mui/material";

import OverviewCard from "../../../components/overview/OverviewCard";
import OverviewChartSection from "../../../components/overview/OverviewChartSection";
import BottomCardsWrapper from "../../../components/overview/BottomCardsWrapper";
import UnresolvedTickets from "../../../components/overview/UnresolvedTicketsList";
import TasksSection from "../../../components/overview/TasksSection";
import { useEffect, useState } from "react";
import OverviewCardSkeleton from "../../../components/overview/OverviewCardSkeleton";
import dayjs from "dayjs";

const Overview = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Container maxWidth="xl">
      <Grid container rowSpacing={5} columnSpacing={5} sx={{ mb: "30px" }}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {!loading ? (
            <OverviewCardSkeleton />
          ) : (
            <OverviewCard title="Unresolved" data={60} />
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {!loading ? (
            <OverviewCardSkeleton />
          ) : (
            <OverviewCard title="Overdue" data={16} />
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {!loading ? (
            <OverviewCardSkeleton />
          ) : (
            <OverviewCard title="Open" data={43} />
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {!loading ? (
            <OverviewCardSkeleton />
          ) : (
            <OverviewCard title="On hold" data={64} />
          )}
        </Grid>

        {/* row 2 - ChartSection & Summary */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <OverviewChartSection currentDate={dayjs()} />
        </Grid>

        {/* row 3 - Unresolved tickets & Tasks */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <BottomCardsWrapper
            title="Unresolved Tickets"
            detailsText="Group"
            btnText="View details"
            btnRoute="/dashboard/tickets"
            groupType="Support"
          >
            <UnresolvedTickets />
          </BottomCardsWrapper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <BottomCardsWrapper
            title="Tasks"
            detailsText="Today"
            btnText="View all"
            btnRoute="/dashboard/ideas"
          >
            <TasksSection />
          </BottomCardsWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Overview;
