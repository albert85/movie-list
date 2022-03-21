import React from 'react';
import {
  FormWrapper,
  PageTitle,
  PageWrapper,
} from '../../components/helper/style';
import CustomField from '../../components/InputField';
import CustomButton from '../../components/Buttons';
import { RegisterInfo } from '../login/style';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postRequest } from '../../utils/apiCall';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { REGISTER_USER } from '../../utils/apilUrl';
import RegistrationSchema from '../../components/helper/registrationValidation';

const Registration = () => {
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
        <PageTitle>Registration</PageTitle>
        <Formik
          validationSchema={RegistrationSchema}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              mutate.mutate({ url: REGISTER_USER, data: values });
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ handleSubmit, handleChange, values, errors, isSubmitting }) =>
            console.log(errors) || (
              <form onSubmit={handleSubmit}>
                <CustomField
                  errors={errors}
                  value={values.firstName}
                  onChange={handleChange}
                  name="firstName"
                  title="First Name"
                  type="text"
                />
                <CustomField
                  errors={errors}
                  onChange={handleChange}
                  name="lastName"
                  title="Last Name"
                  type="text"
                />
                <CustomField
                  errors={errors}
                  onChange={handleChange}
                  name="email"
                  title="Email"
                  type="email"
                />
                <CustomField
                  errors={errors}
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
                      : 'Register'
                  }
                  type={'submit'}
                />
              </form>
            )
          }
        </Formik>
        <RegisterInfo>
          Already have an account? <Link to="/">Login</Link>
        </RegisterInfo>
      </FormWrapper>
    </PageWrapper>
  );
};

export default Registration;
