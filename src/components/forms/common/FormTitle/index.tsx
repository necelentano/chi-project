import Typography from "@mui/material/Typography";

type TFormTitleProps = {
  title: string;
};

const FormTitle = ({ title }: TFormTitleProps) => {
  return (
    <Typography
      sx={{
        fontSize: "24px",
        fontWeight: "fontWeightBold",
        color: "#252733",
        mt: "26px",
      }}
    >
      {title}
    </Typography>
  );
};

export default FormTitle;
