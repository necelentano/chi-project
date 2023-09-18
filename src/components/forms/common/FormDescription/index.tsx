import Typography from "@mui/material/Typography";

type TFormDescriptionProps = {
  description: string;
};

const FormDescription = ({ description }: TFormDescriptionProps) => {
  return (
    <Typography
      sx={{
        fontSize: "14px",
        fontWeight: "fontWeightRegular",
        color: "#9FA2B4",
        mt: "12px",
      }}
    >
      {description}
    </Typography>
  );
};

export default FormDescription;
