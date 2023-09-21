import InputLabel from "@mui/material/InputLabel";

type FormLabelProps = {
  text: string;
};

const FormLabel = ({ text }: FormLabelProps) => {
  return (
    <InputLabel
      shrink
      sx={{
        fontWeight: "fontWeightBold",
        fontSize: "16px",
        color: "#9FA2B4",
        mt: "30px",
        "&.MuiFormLabel-root": {
          color: "#9FA2B4",
        },
        ".Mui-focused": {
          color: "#9FA2B4",
        },
      }}
    >
      {text.toUpperCase()}
    </InputLabel>
  );
};

export default FormLabel;
