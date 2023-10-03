import { Box } from "@mui/material";
import { TTaskItem } from "../../../../utils/types";
import TaskListItem from "../TaskListItem";

type TaskListProps = {
  tasks: TTaskItem[];
};

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <Box
      sx={{
        "& .MuiBox-root:last-of-type": {
          borderBottom: 0,
        },
      }}
    >
      {tasks.map((item) => (
        <TaskListItem item={item} key={item.id} />
      ))}
    </Box>
  );
};

export default TaskList;
