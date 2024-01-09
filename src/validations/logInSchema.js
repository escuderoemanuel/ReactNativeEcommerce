import { object, string } from 'yup';

export const logInSchema = object().shape({
  email: string()
    .required('Please, enter your email')
    .email('Invalid email format'),
  password: string()
    .required('Please, enter your password')
})