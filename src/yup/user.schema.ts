import * as yup from 'yup'


const email = yup.string().email().required()
const password = yup.string().min(6).max(64).required()

const name = yup.string().min(3).required()
const desciption = yup.string().max(64)
const phoneNumber = yup.string().max(64)

const userForm = yup.object().shape({
  name,
  desciption,
  phoneNumber,
})


const userSchema = {
  email,
  password,
  userForm,
}

export default userSchema