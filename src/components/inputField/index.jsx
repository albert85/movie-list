import React from 'react';
import { CustomFieldContainer, CustomInputFieldWrapper } from './style';

const CustomInputField = ({ title = '', ...rest}) => {
  return(
    <CustomInputFieldWrapper>
      <p>{title}</p>
      <CustomFieldContainer {...rest}/>
    </CustomInputFieldWrapper>
  )
}

export default CustomInputField;