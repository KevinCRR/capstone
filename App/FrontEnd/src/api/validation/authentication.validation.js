 import * as Yup from 'yup';
 
 export const LoginSchema = Yup.object().shape({
   email: Yup.string()
     .email('Invalid Email Address')
     .required('Required'),
   password: Yup.string()
     .min(6, 'Password too short!')
     .required('Required'),
 });