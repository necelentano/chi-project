import { Box, Button, Paper } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import ErrorText from "../common/ErrorText";
import FormButton from "../common/FormButton";
import FormTitle from "../common/FormTitle";
import FormDescription from "../common/FormDescription";
import FormFooter from "../common/FormFooter";
import FormHeader from "../common/FormHeader";
import FormElement from "./FormElement";

import { useAppDispatch } from "../../../utils/hooks/redux";
import { setModalOpen } from "../../../store/modalSlice";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { BaseQueryFn, MutationDefinition } from "@reduxjs/toolkit/dist/query";

import { TAuthError, TField, TFooterItem } from "../../../utils/types";
import { TAddContactFormData } from "../formsData/addContact";
import { TResetPasswordFormData } from "../formsData/resetPassword";
import { TLoginFormData } from "../formsData/login";
import { TAddTicketFormData } from "../formsData/addTicket";
import { TForgotPasswordFormData } from "../formsData/forgotPassword";

export type TFormTemplate =
  | TLoginFormData
  | TAddContactFormData
  | TResetPasswordFormData
  | TAddTicketFormData
  | TForgotPasswordFormData;

type TDynamicFormProps = {
  template: TFormTemplate;
  submitHandler: MutationTrigger<
    MutationDefinition<
      FieldValues,
      BaseQueryFn,
      never,
      string | undefined,
      "api"
    >
  >;
  isError: boolean;
  isLoading: boolean;
  error: TAuthError;
};

const DynamicForm = ({
  template,
  submitHandler,
  isError,
  error,
  isLoading,
}: TDynamicFormProps) => {
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(setModalOpen(false));
  };

  const {
    header,
    fields,
    submit,
    yupSchema,
    title,
    description,
    footer,
    isModal,
  } = template;

  const { control, handleSubmit, watch } = useForm<FieldValues>({
    resolver: yupResolver<FieldValues>(yupSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    submitHandler(data);
    if (isModal) {
      handleCloseModal();
    }
  };
  return (
    <Paper
      variant={isModal ? "elevation" : "outlined"}
      sx={[
        {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "380px",
          p: "32px",
          borderRadius: "8px",
        },
        isModal && { borderRadius: "0px" },
      ]}
    >
      {header && <FormHeader />}
      <Box
        sx={{ width: "100%", mb: "32px" }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {title && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <FormTitle title={title} />
          </Box>
        )}
        {description && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <FormDescription description={description} />
          </Box>
        )}
        {fields &&
          fields.map((field: TField) => (
            <FormElement
              key={field.name}
              field={field}
              control={control}
              watch={watch}
            />
          ))}
        {submit && (
          <FormButton btnType={submit.buttonType} loading={isLoading}>
            {submit.buttonText}
          </FormButton>
        )}

        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isError ? (
            <ErrorText>{`${(error as TAuthError).name}: ${
              (error as TAuthError).code
            }`}</ErrorText>
          ) : null}
        </Box>
      </Box>

      {isModal && (
        <Button
          variant="text"
          onClick={handleCloseModal}
          fullWidth
          sx={{
            borderRadius: "8px",
            py: "9px",
            mb: "30px",
            "&.MuiButton-text": {
              textTransform: "inherit",
              fontSize: "14px",
              fontWeight: 600,
            },
          }}
        >
          Cancel
        </Button>
      )}

      {footer &&
        footer.map((item: TFooterItem, index: number) => (
          <FormFooter
            key={index}
            text={item.text}
            linkText={item.linkText}
            to={item.to}
          />
        ))}
    </Paper>
  );
};

export default DynamicForm;
