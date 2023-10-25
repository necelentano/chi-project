import { useEffect, useState } from "react";
import { Container, useMediaQuery } from "@mui/material";
import CommonDataGrid from "../../../components/CommonDataGrid";
import { TAuthError, TSortModel } from "../../../utils/types";
import { contactColumns } from "./contactsColumns";
import { contactsData } from "../../../data/contactsData";
import { addContactFormData } from "../../../components/forms/formsData/addContact";

function Contacts() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  // Specify sortModel
  const sortModel: TSortModel[] = [
    {
      field: "createdAt",
      sort: "desc",
    },
  ];

  // RTK Query hook here with our contacts (data, isLoading, isError, error, etc.) - not implemented because there is no backend yet
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
        tableColumns={contactColumns}
        tableData={contactsData}
        tableSortModel={sortModel}
        tableIsLoading={!loading}
        formTemplate={addContactFormData}
        formSubmitHandler={() => console.log("POST: create new contact")}
        formIsError={false}
        formError={{} as TAuthError}
        formIsLoading={false}
        formButtonText="Add contact"
      />
    </Container>
  );
}

export default Contacts;
