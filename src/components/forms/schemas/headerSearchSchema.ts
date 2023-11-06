import * as yup from "yup";

const headerSearchSchema = yup.object().shape({
  searchText: yup
    .string()
    .required("Search query is required")
    .min(3, "Minimum length of 3")
    .max(40, "Maximum length of 40"),
});

export default headerSearchSchema;
