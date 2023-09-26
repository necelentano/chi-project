import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type TSettingsOptionItemProps = {
  title: string;
  desc: string;
  buttonText: string;
  route: string;
};

const SettingsOptionItem = ({
  title,
  desc,
  buttonText,
  route,
}: TSettingsOptionItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
        margin: "0 auto",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #C5C7CD",
        borderRadius: "8px",
        bgcolor: "#FFFFFF",
        py: "10px",
        px: "20px",
        flexDirection: { sm: "row", xs: "column" },
        mb: "20px",
      }}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#C5C7CD", mb: { xs: "10px" } }}
        >
          {desc}
        </Typography>
      </Box>
      <Button component={RouterLink} to={route}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default SettingsOptionItem;
