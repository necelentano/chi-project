import { Box, Button, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputWrapper from "../common/FormInputWrapper";
import FormLabel from "../common/FormLabel";
import FormInput from "../common/FormInput";
import addContactSchema from "../schemas/addContactSchema";

import FormTitle from "../common/FormTitle";
import FormButton from "../common/FormButton";
import ErrorText from "../common/ErrorText";

import { useAppDispatch } from "../../../utils/hooks/redux";
import { setModalOpen } from "../../../store/modalSlice";
import { toast } from "react-toastify";

import FormImageUpload from "../common/FormImageUpload";
import * as yup from "yup";

export interface TAddContactFormValues
  extends yup.InferType<typeof addContactSchema> {}

const AddTicketForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TAddContactFormValues>({
    resolver: yupResolver<TAddContactFormValues>(addContactSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: TAddContactFormValues) => {
    console.log("AddContactForm data: ", data);
    toast.success("A new contact was created successfully!");
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
        <FormTitle title="Add contact" />
      </Box>

      <Box
        sx={{ width: "100%", mb: "32px" }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormInputWrapper>
          <FormImageUpload register={register} watch={watch} />
          {errors.image ? <ErrorText>{errors.image.message}</ErrorText> : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="First name" />
          <FormInput
            placeholder="First name"
            id="firstName"
            type="text"
            register={register("firstName")}
            error={errors.firstName ? true : false}
          />
          {errors.firstName ? (
            <ErrorText>{errors.firstName.message}</ErrorText>
          ) : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="Last name" />
          <FormInput
            placeholder="Last name"
            id="lastName"
            type="text"
            register={register("lastName")}
            error={errors.lastName ? true : false}
          />
          {errors.lastName ? (
            <ErrorText>{errors.lastName.message}</ErrorText>
          ) : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="Email" />
          <FormInput
            placeholder="Email address"
            id="email"
            type="email"
            register={register("email")}
            error={errors.email ? true : false}
          />
          {errors.email ? <ErrorText>{errors.email.message}</ErrorText> : null}
        </FormInputWrapper>
        <FormInputWrapper>
          <FormLabel text="Address" />
          <FormInput
            placeholder="Address"
            id="address"
            type="text"
            register={register("address")}
            error={errors.address ? true : false}
          />
          {errors.address ? (
            <ErrorText>{errors.address.message}</ErrorText>
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
