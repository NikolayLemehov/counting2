import React from 'react';
import {TextField} from "@mui/material";
import {useField} from "formik";

const MyTextField = ({ ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field, meta)
  const textFieldConfig = {
    ...field,
    ...props,
    fullWidth: true,
    variant: 'outlined'
  };

  if (meta && meta.touched && meta.error) {
    textFieldConfig.error = true;
    textFieldConfig.helperText = meta.error;
  }

  return (
    <TextField {...textFieldConfig}/>
  );
};

export default MyTextField;