import { Box, Grid, useMediaQuery } from "@mui/material";

import CommonDataGrid from "../../../components/CommonDataGrid";
import { ticketColumns } from "./ticketsColumns";
import { ticketsData } from "../../../data/ticketsData";
import { TAuthError, TSortModel } from "../../../utils/types";
import { addTicketFormData } from "../../../components/forms/formsData/addTicket";
import { useEffect, useState } from "react";

import styles from "./styles";

const Tickets = () => {
  const isMobile320 = useMediaQuery("(max-width:320px)");
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");
  const isLaptop1024 = useMediaQuery("(max-width:1024px)");
  const isLaptop1280 = useMediaQuery("(max-width:1280px)");
  const isLaptop1440 = useMediaQuery("(max-width:1440px)");

  // Specify sortModel
  const sortModel: TSortModel[] = [
    {
      field: "priority",
      sort: "desc",
    },
  ];

  // RTK Query hook here with our tickets (data, isLoading, isError, error, etc.) - not implemented because there is no backend yet
  // At this moment we are using mocked data = ticketsData
  //Here we do a loading state for fake request
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Here we also use RTK Query hook to handle form, not implemented because there is no backend yet

  return (
    <Box
      sx={[
        styles.container,
        isLaptop1440 && styles.laptop1440Width,
        isLaptop1280 && styles.laptop1280Width,
        isLaptop1024 && styles.laptop1024Width,
        isTablet && styles.tabletWidth,
        isMobile && styles.mobileWidth,
        isMobile320 && styles.mobile320Width,
      ]}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CommonDataGrid
            tableColumns={ticketColumns}
            tableData={ticketsData}
            tableSortModel={sortModel}
            tableIsLoading={!loading}
            formTemplate={addTicketFormData}
            formSubmitHandler={() => console.log("POST: create new ticket")}
            formIsError={false}
            formError={{} as TAuthError}
            formIsLoading={false}
            formButtonText="Add ticket"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tickets;
