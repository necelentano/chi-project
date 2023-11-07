import { Box, Checkbox, Typography } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TaskPriorityChip from "../TaskPriorityChip";
import { TTaskItem } from "../../../../utils/types";

import styles from "./styles";

type TTaskListItemProps = {
  item: TTaskItem;
};

const TaskListItem = ({ item }: TTaskListItemProps) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.taskItemWrapper}>
        <Box sx={styles.checkboxWrapper}>
          <Checkbox
            sx={styles.checkbox}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
            id={`${item.id}`}
          />
        </Box>
        <Box>
          <Typography sx={styles.taskText}>{item.taskText}</Typography>
        </Box>
      </Box>
      <Box>
        <TaskPriorityChip label={item.priority} />
      </Box>
    </Box>
  );
};

export default TaskListItem;
