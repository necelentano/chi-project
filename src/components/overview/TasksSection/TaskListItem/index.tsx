import { Box, Checkbox, Typography } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TaskPriorityChip from "../TaskPriorityChip";
import { TTaskItem } from "../../../../utils/types";

type TTaskListItemProps = {
  item: TTaskItem;
};

const TaskListItem = ({ item }: TTaskListItemProps) => {
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
        }}
      >
        <Box sx={{ mr: "16px" }}>
          <Checkbox
            sx={{ padding: "0px" }}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
          />
        </Box>
        <Box>
          <Typography
            sx={{ color: "#252733", fontSize: "14px", fontWeight: 600 }}
          >
            {item.taskText}
          </Typography>
        </Box>
      </Box>
      <Box>
        <TaskPriorityChip label={item.priority} />
      </Box>
    </Box>
  );
};

export default TaskListItem;
