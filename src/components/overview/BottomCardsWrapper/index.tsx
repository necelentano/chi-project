import { Box, Button, Paper, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

import styles from "./styles";

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
    <Paper variant="outlined" sx={styles.paper}>
      <Box sx={styles.cardHeaderWrapper}>
        <Box>
          <Typography sx={styles.title}>{title}</Typography>
          <Typography sx={styles.details}>
            {detailsText === "Group" ? `${detailsText}:` : detailsText}
            {detailsText === "Group" && (
              <Typography sx={styles.detailsGroup} component={"span"}>
                {groupType}
              </Typography>
            )}
          </Typography>
        </Box>
        <Box sx={styles.headerButtonWrapper}>
          <Button sx={styles.headerButton} component={RouterLink} to={btnRoute}>
            {btnText}
          </Button>
        </Box>
      </Box>
      {children}
    </Paper>
  );
};

export default BottomCardsWrapper;
