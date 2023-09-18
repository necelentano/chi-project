import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

type FormFooterProps = {
  text: string;
  linkText: string;
  to: string;
};

function FormFooter({ text, linkText, to }: FormFooterProps) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "14px", color: "#9FA2B4", mr: "4px" }}>
        {text}
      </Typography>
      <RouterLink
        to={to}
        style={{
          color: "#3751FF",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "14px",
        }}
      >
        {linkText}
      </RouterLink>
    </Box>
  );
}

export default FormFooter;
