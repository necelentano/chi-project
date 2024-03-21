import { Box, IconButton, SvgIcon, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import headerSearchSchema from "../../forms/schemas/headerSearchSchema";
import ErrorText from "../../forms/common/ErrorText";
import { useEffect, useState } from "react";

import styles from "./styles";

export type TSearchValues = {
  searchText: string;
};

const HeaderSearch = () => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitSuccessful },
  } = useForm<TSearchValues>({
    resolver: yupResolver(headerSearchSchema),
  });

  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    if (errors.searchText) {
      setSearchError(true);
    } else {
      setSearchError(false);
    }
  }, [errors.searchText]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data: TSearchValues) => {
    console.log(data);
  };

  const handleBlur = () => {
    clearErrors();
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      sx={styles.form}
    >
      <Box>
        <TextField
          id="taskText"
          variant="standard"
          placeholder="Search"
          fullWidth
          error={searchError}
          {...register("searchText")}
          onBlur={handleBlur}
          sx={styles.textField}
        />
        {errors ? <ErrorText>{errors.searchText?.message}</ErrorText> : null}
      </Box>
      <Box>
        <IconButton type="submit">
          <SvgIcon>
            <SearchIcon />
          </SvgIcon>
        </IconButton>
      </Box>
    </Box>
  );
};

export default HeaderSearch;
