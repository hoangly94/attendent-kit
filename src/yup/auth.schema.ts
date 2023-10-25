import * as yup from 'yup'
import userSchema from './user.schema'

const loginForm = yup.object().shape({
  email: userSchema.email,
  password: userSchema.password,
  isRemembered: yup.boolean().optional(),
})

const accountRegistrationForm = yup.object().shape({
  companyName: yup.string().required(),
  fullname: yup.string().required(),
  email: userSchema.email,
})

const accountValidationForm = yup.object().shape({
  password: userSchema.password,
})


const siteCreationForm = yup.object().shape({
  industry: yup.string().required(),
  name: yup.string().required(),
  location: yup.string().required(),
})

const authSchema = {
  loginForm,
  accountRegistrationForm,
  accountValidationForm,
  siteCreationForm,
}

export default authSchema