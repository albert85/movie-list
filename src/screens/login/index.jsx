import React from 'react';
import { RegisterInfo } from './style';
import { FormWrapper, PageTitle, PageWrapper } from '../../components/helper/style';
import CustomField from '../../components/inputField';
import CustomButton from '../../components/Buttons';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <PageWrapper>
      <FormWrapper>
        <PageTitle>Login</PageTitle>
        <form>
          <CustomField title="Email" required type="email" />
          <CustomField title="Password" required type="password" />
          <CustomButton label="Login" type="submit" />
        </form>
        <RegisterInfo>Don't have an account? <Link to='/'>Please register</Link></RegisterInfo>
      </FormWrapper>
    </PageWrapper>
  );
};

export default App;
