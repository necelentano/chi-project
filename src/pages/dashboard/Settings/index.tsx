import Box from "@mui/material/Box";

import SettingsOptionItem from "../../../components/SettingsOptionItem";

const Settings = () => {
  return (
    <Box sx={{ py: "20px" }}>
      <SettingsOptionItem
        title="Reset Password"
        desc="This option allows you to change your password"
        buttonText="Reset Password"
        route="reset-password"
      />
    </Box>
  );
};

export default Settings;
