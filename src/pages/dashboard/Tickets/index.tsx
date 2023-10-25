import { Container, useMediaQuery } from "@mui/material";

import CommonDataGrid from "../../../components/CommonDataGrid";
import { ticketColumns } from "./ticketsColumns";
import { ticketsData } from "../../../data/ticketsData";
import { TAuthError, TSortModel } from "../../../utils/types";
import { addTicketFormData } from "../../../components/forms/formsData/addTicket";
import { useEffect, useState } from "react";

const Tickets = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

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
    <Container
      disableGutters
      maxWidth={"xl"}
      sx={[
        { my: "20px" },
        isMobile && {
          width: "375px",
        },
        isTablet && {
          width: "375px",
        },
      ]}
    >
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
    </Container>
  );
};

export default Tickets;
