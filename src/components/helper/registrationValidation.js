import * as yup from 'yup';

const RegistrationSchema = yup.object().shape({
  firstName: yup.string().required('This is required'),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default RegistrationSchema;
