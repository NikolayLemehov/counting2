import React from 'react';
import {useField} from "formik";
import {TextField} from "@mui/material";

const DatePicker = ({...props}) => {
  const [field, meta] = useField(props);
  const textFieldConfig = {
    ...field,
    ...props,
    type: 'date',
    variant: 'outlined',
    InputLabelProps: {
      shrink: true,
    }
  };

  if (meta && meta.touched && meta.error) {
    textFieldConfig.error = true;
    textFieldConfig.helperText = meta.error;
  }

  return (
    <TextField {...textFieldConfig}/>
  );
}

export default DatePicker;