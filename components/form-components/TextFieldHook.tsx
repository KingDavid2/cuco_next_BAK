import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { FormTypes } from "./FormTypes";

const TextFieldHook = ({ name, control, label }: FormTypes) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value || ''}
          fullWidth
          label={label}
        />
      )}
    />
  );
};

export default TextFieldHook