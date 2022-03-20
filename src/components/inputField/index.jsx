import React from 'react';
import { CustomFieldContainer, CustomInputFieldWrapper } from './style';

const CustomInputField = ({ title = '', errors, ...rest}) => {
  return(
    <CustomInputFieldWrapper>
      <p>{title}</p>
      <CustomFieldContainer {...rest}/>
      {errors[rest.name] && (<p style={{ color: 'red', margin: '0', fontSize: '10px'}}>{errors[rest.name]}</p>)}
    </CustomInputFieldWrapper>
  )
}

export default CustomInputField;