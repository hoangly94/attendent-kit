import * as yup from 'yup'

const filePath = yup.string()

const serverInformationForm = yup.object().shape({
  privaFilePath: filePath.required(),
  configFilePath: filePath.required(),
  username: yup.string().required(),
  password: yup.string().required(),
})

const appSchema = {
  serverInformationForm
}

export default appSchema