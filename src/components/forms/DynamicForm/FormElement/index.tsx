import FormInputWrapper from "../../common/FormInputWrapper";
import FormLabel from "../../common/FormLabel";
import FormInput from "../../common/FormInput";
import FormSelect from "../../common/FormSelect";
import FormImageUpload from "../../common/FormImageUpload";
import FormDatePicker from "../../common/FormDatePicker";
import { InputTypeEnum, TField } from "../../../../utils/types";
import { Control, FieldValues, UseFormWatch } from "react-hook-form";

type TFormElementProps = {
  field: TField;
  control: Control<FieldValues>;
  watch: UseFormWatch<FieldValues>;
};

const FormElement = ({ field, control, watch }: TFormElementProps) => {
  const {
    label,
    placeholder,
    name,
    textFieldType,
    isPassword,
    inputType,
    options,
  } = field;

  switch (inputType) {
    case InputTypeEnum.Text:
      return (
        <FormInputWrapper>
          <FormLabel text={label} />
          <FormInput
            placeholder={placeholder}
            isPassword={isPassword}
            type={textFieldType}
            name={name}
            id={name}
            control={control}
          />
        </FormInputWrapper>
      );

    case InputTypeEnum.Select:
      return (
        <FormInputWrapper>
          <FormLabel text={label} />
          <FormSelect
            placeholder={placeholder}
            name={name}
            control={control}
            options={options}
          />
        </FormInputWrapper>
      );
    case InputTypeEnum.DateTimePicker:
      return (
        <FormInputWrapper>
          <FormLabel text={label} />
          <FormDatePicker name={name} control={control} />
        </FormInputWrapper>
      );
    case InputTypeEnum.ImageUpload:
      return (
        <FormInputWrapper>
          <FormImageUpload
            control={control}
            watch={watch}
            name={name}
            type={textFieldType}
            placeholder={placeholder}
          />
        </FormInputWrapper>
      );
    default:
      return null;
  }
};

export default FormElement;
