import { Box, Button, Paper, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

type TBottomCardsWrapperProps = {
  title: string;
  detailsText: string;
  btnText: string;
  btnRoute: string;
  groupType?: string;
};

const BottomCardsWrapper = ({
  children,
  title,
  detailsText,
  btnText,
  btnRoute,
  groupType,
}: PropsWithChildren<TBottomCardsWrapperProps>) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        bgcolor: "#FFFFFF",
        border: "1px solid #DFE0EB",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: "20px",
          px: "32px",
          pt: "32px",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#252733",
              fontSize: "19px",
              fontWeight: 700,
              pb: "8px",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#9FA2B4",
              fontSize: "14px",
              fontWeight: 400,
              display: "flex",
            }}
          >
            {detailsText === "Group" ? `${detailsText}:` : detailsText}
            {detailsText === "Group" && (
              <Typography
                sx={{
                  color: "black",
                  fontSize: "14px",
                  fontWeight: 400,
                  pl: "3px",
                }}
                component={"span"}
              >
                {groupType}
              </Typography>
            )}
          </Typography>
        </Box>
        <Box sx={{ mt: "-8px" }}>
          <Button
            sx={{
              "&.MuiButton-text": {
                borderRadius: "8px",
                color: "primary.text",
                textTransform: "capitalize",
                py: "10px",
              },
            }}
            component={RouterLink}
            to={btnRoute}
          >
            {btnText}
          </Button>
        </Box>
      </Box>
      {children}
    </Paper>
  );
};

export default BottomCardsWrapper;
