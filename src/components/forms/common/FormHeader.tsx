import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import logo from "../../../assets/logo.svg";

function FormHeader() {
  return (
    <>
      <Box sx={{ mb: "10px" }}>
        <Avatar alt="Logo" src={logo} sx={{ width: 48, height: 48 }} />
      </Box>
      <Typography
        sx={{
          fontSize: "19px",
          fontWeight: "fontWeightBold",
          color: "#A4A6B3",
        }}
      >
        Dashboard Kit
      </Typography>
    </>
  );
}

export default FormHeader;
