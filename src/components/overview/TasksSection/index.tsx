import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, IconButton, SvgIcon, TextField } from "@mui/material";
import TaskList from "./TaskList";
import { TTaskItem } from "../../../utils/types";
import TaskItemSkeleton from "./TaskItemSkeleton";
import AddTaskIcon from "../../../assets/addTaskIcon.svg?react";
import mokedTasksData from "../../../data/tasks";

import styles from "./styles";

const addTaskSchema = yup.object().shape({
  taskText: yup
    .string()
    .min(6, "Must be more than 6 symbols")
    .max(40, "Must be shorter than 40 symbols")
    .required("Task text is required"),
});

export type TaskFormValues = {
  taskText: string;
};

const TasksSection = () => {
  const [tasks, setTasks] = useState<TTaskItem[]>(mokedTasksData);
  const { register, handleSubmit, reset } = useForm<TaskFormValues>({
    resolver: yupResolver(addTaskSchema),
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onSubmit = (data: TaskFormValues) => {
    const newTask: TTaskItem = {
      id: new Date().valueOf(),
      taskText: data.taskText,
      completed: false,
      priority: "default",
    };
    setTasks([...tasks, newTask]);
    reset();
  };
  return (
    <Box sx={styles.container}>
      <Box
        component="form"
        sx={styles.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box sx={styles.inputWrapper}>
          <TextField
            id="taskText"
            variant="standard"
            placeholder="Create new task"
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            {...register("taskText")}
          />
        </Box>

        <Box sx={styles.addTaskButtonWrapper}>
          <IconButton sx={styles.iconButton} type="submit">
            <SvgIcon>
              <AddTaskIcon />
            </SvgIcon>
          </IconButton>
        </Box>
      </Box>
      <Box sx={styles.taskListWrapper}>
        {!loading ? (
          <Box sx={styles.skeletonTasksWrapper}>
            {[0, 1, 2].map((item) => (
              <TaskItemSkeleton key={item} />
            ))}
          </Box>
        ) : (
          <TaskList tasks={tasks} />
        )}
      </Box>
    </Box>
  );
};

export default TasksSection;
