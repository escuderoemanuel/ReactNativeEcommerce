import { object, ref, string } from 'yup'

export const signUpSchema = object().shape({
  email: string()
    .required('Please, enter you email')
    .email('Invalid email format'),

  password: string()
    .required('Please, enter you password')
    .min(6, 'Password must be at least 6 characters'),

  confirmPassword: string()
    .required('Please, confirm your password')
    .oneOf([ref('password'), null], 'Passwords must match')
})