import { Box, Button, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputWrapper from "../common/FormInputWrapper";
import FormLabel from "../common/FormLabel";
import FormInput from "../common/FormInput";
import addTicketSchema from "../schemas/addTicketSchema";

import FormTitle from "../common/FormTitle";
import FormButton from "../common/FormButton";
import ErrorText from "../common/ErrorText";
import FormDatePicker from "../common/FormDatePicker";
import FormSelect from "../common/FormSelect";
import dayjs from "dayjs";

import { useAppDispatch } from "../../../utils/hooks/redux";
import { setModalOpen } from "../../../store/modalSlice";
import { toast } from "react-toastify";

export type AddTicketFormValues = {
  ticketDescription: string;
  customerName: string;
  date: Date;
  priority: "low" | "normal" | "high";
};

const AddTicketForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddTicketFormValues>({
    resolver: yupResolver<AddTicketFormValues>(addTicketSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: AddTicketFormValues) => {
    const { date, ticketDescription, customerName, priority } = data;

    const newTicket = {
      id: new Date().valueOf(),
      createdAt: dayjs(date).toISOString(),
      updatedAt: dayjs(date).toISOString(),
      details: ticketDescription,
      priority,
      byUser: {
        id: 9,
        createdAt: "2023-06-01T11:13:27+0000",
        name: customerName,
        photo: "https://vectorified.com/images/default-avatar-icon-36.png",
      },
    };
    console.log(newTicket);
    toast.success("A new ticket was created successfully!");
    handleCloseModal();
  };

  const handleCloseModal = () => {
    dispatch(setModalOpen(false));
  };

  return (
    <Paper
      variant="outlined"
      square
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "380px",
        p: "32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <FormTitle title="Add ticket" />
      </Box>

      <Box
        sx={{ width: "100%", mb: "32px" }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormInputWrapper>
          <FormLabel text="Ticket details" />
          <FormInput
            placeholder="Add ticket description"
            id="ticketDescription"
            type="text"
            register={register("ticketDescription")}
            error={errors.ticketDescription ? true : false}
          />
          {errors.ticketDescription ? (
            <ErrorText>{errors.ticketDescription.message}</ErrorText>
          ) : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="Customer name" />
          <FormInput
            placeholder="Name"
            id="customerName"
            type="text"
            register={register("customerName")}
            error={errors.customerName ? true : false}
          />
          {errors.customerName ? (
            <ErrorText>{errors.customerName.message}</ErrorText>
          ) : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="Date" />
          <FormDatePicker control={control} />
          {errors.date ? <ErrorText>{errors.date.message}</ErrorText> : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="Priority" />
          <FormSelect control={control} />
          {errors.priority ? (
            <ErrorText>{errors.priority.message}</ErrorText>
          ) : null}
        </FormInputWrapper>
        <FormButton btnType="contained">Save</FormButton>
      </Box>
      <Button
        variant="text"
        onClick={handleCloseModal}
        fullWidth
        sx={{
          borderRadius: "8px",
          py: "9px",
          "&.MuiButton-text": {
            textTransform: "inherit",
            fontSize: "14px",
            fontWeight: 600,
          },
        }}
      >
        Cancel
      </Button>
    </Paper>
  );
};

export default AddTicketForm;
