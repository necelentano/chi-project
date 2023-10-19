import { Container, useMediaQuery } from "@mui/material";
import ContactsDataGrid from "../../../components/ContactsDataGrid";

function Contacts() {
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
      <ContactsDataGrid />
    </Container>
  );
}

export default Contacts;
