import Box from "@mui/material/Box";

type Props = {
  children: JSX.Element;
};

const PablicLayout = ({ children }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {children}
    </Box>
  );
};
export default PablicLayout;
