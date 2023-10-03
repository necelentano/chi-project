import { Box, Skeleton } from "@mui/material";

const TaskItemSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pt: "12px",
        pb: "13px",
        borderBottom: "1px solid #DFE0EB",
        minWidth: "100%",
        px: "32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minWidth: "86%",
        }}
      >
        <Box sx={{ mr: "16px" }}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={24}
            height={24}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Skeleton animation="wave" height={10} width="70%" />
        </Box>
      </Box>
      <Box sx={{ width: 72 }}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={32}
          width={72}
          sx={{ borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );
};

export default TaskItemSkeleton;
