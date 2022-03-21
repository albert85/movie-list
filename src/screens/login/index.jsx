import React from 'react';
import { RegisterInfo } from './style';
import {
  FormWrapper,
  PageTitle,
  PageWrapper,
} from '../../components/helper/style';
import CustomField from '../../components/InputField';
import CustomButton from '../../components/Buttons';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { useMutation } from 'react-query';
import { postRequest } from '../../utils/apiCall';
import { toast } from 'react-toastify';
import LoginSchema from '../../components/helper/loginValidation';
import { LOGIN_USER } from '../../utils/apilUrl';

const Login = () => {
  const history = useNavigate();

  const mutate = useMutation(postRequest, {
    onSuccess(res) {
      console.log(res);
      toast.success(res.message);
      localStorage.setItem('@userToken', res.token);
      history('/dashboard');
    },
    onError(err) {
      toast.error(err?.response?.data?.message);
    },
  });
  return (
    <PageWrapper>
      <FormWrapper>
        <PageTitle>Login</PageTitle>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              mutate.mutate({ url: LOGIN_USER, data: values });
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, values, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <CustomField
                errors={errors}
                value={values.email}
                onChange={handleChange}
                name="email"
                title="Email"
                type="email"
              />
              <CustomField
                errors={errors}
                value={values.password}
                onChange={handleChange}
                name="password"
                title="Password"
                type="password"
              />
              <CustomButton
                  disabled={isSubmitting}
                  label={
                    mutate.isLoading || isSubmitting
                      ? 'Please waiting..'
                      : 'Login'
                  }
                  type={'submit'}
                />
            </form>
          )}
        </Formik>
        <RegisterInfo>
          Don't have an account? <Link to="/register">Signup</Link>
        </RegisterInfo>
      </FormWrapper>
    </PageWrapper>
  );
};

export default Login;
