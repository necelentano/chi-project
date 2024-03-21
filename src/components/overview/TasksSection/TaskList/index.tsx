import { Box } from "@mui/material";
import { TTaskItem } from "../../../../utils/types";
import TaskListItem from "../TaskListItem";

import styles from "./styles";

type TaskListProps = {
  tasks: TTaskItem[];
};

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <Box sx={styles.container}>
      {tasks.map((item) => (
        <TaskListItem item={item} key={item.id} />
      ))}
    </Box>
  );
};

export default TaskList;
