import * as yup from "yup";

const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions = ["jpg", "gif", "png", "jpeg", "svg", "webp"];

type TIsValidFileReturnType =
  | boolean
  | yup.ValidationError
  | PromiseLike<boolean | yup.ValidationError>;

const isValidFileType = (fileName: string): TIsValidFileReturnType => {
  const extesion = fileName && fileName.split(".").pop();
  return (fileName &&
    validFileExtensions.indexOf(extesion as string) >
      -1) as TIsValidFileReturnType;
};

const addContactSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(2, "First name should have a minimum length of 2")
    .max(15, "First name should have a maximum length of 15"),
  lastName: yup
    .string()
    .required("Last name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(2, "Last name should have a minimum length of 2")
    .max(15, "Last name should have a maximum length of 15"),
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email address is required"),
  address: yup
    .string()
    .required("Address is required")
    .min(6, "Address should have a minimum length of 6")
    .max(50, "Address should have a maximum length of 50"),
  image: yup
    .mixed()
    .test("required", "Please select an image", (value) => {
      if (value && (value as FileList).length) return true;
      return false;
    })
    .test("is-valid-size", "Max allowed size is 100KB", (value) => {
      if (value) {
        const file = (value as FileList)[0];
        return file && file.size <= MAX_FILE_SIZE;
      }
      return true;
    })
    .test("is-valid-type", "Not a valid image type", (value) => {
      return new Promise((resolve) => {
        if (value) {
          const file = (value as FileList)[0];
          resolve(isValidFileType(file && file.name.toLowerCase()));
        } else {
          resolve(true);
        }
      });
    }),
});

export default addContactSchema;
