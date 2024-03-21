import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const HeaderNotification = () => {
  return (
    <IconButton>
      <Badge color="primary" variant="dot" overlap="circular">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default HeaderNotification;
