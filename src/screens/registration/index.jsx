import React from 'react';
import { FormWrapper, PageTitle, PageWrapper } from '../../components/helper/style';
import CustomField from '../../components/inputField';
import CustomButton from '../../components/Buttons';
import { RegisterInfo } from '../login/style';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <PageWrapper>
      <FormWrapper>
        <PageTitle>Registration</PageTitle>
        <form>
        <CustomField title="First Name" required type="text" />
          <CustomField title="Last Name" required type="text" />
          <CustomField title="Email" required type="email" />
          <CustomField title="Password" required type="password" />
          <CustomButton label="Register" type="submit" />
        </form>
        <RegisterInfo>Already have an account? <Link to='/'>Login</Link></RegisterInfo>
      </FormWrapper>
    </PageWrapper>
  );
};

export default Registration;
