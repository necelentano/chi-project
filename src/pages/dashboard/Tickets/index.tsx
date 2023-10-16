import { Container, useMediaQuery } from "@mui/material";
import TicketsDataGrid from "../../../components/TicketsDataGrid";

function Tickets() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

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
      <TicketsDataGrid />
    </Container>
  );
}

export default Tickets;
