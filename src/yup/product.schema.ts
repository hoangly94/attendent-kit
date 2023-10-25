import regex from '@/constants/regex'
import * as yup from 'yup'

export const name = yup.string().required()
export const description = yup.string().max(100)
export const price = yup.number().max(1000000000).required()

// export const youtubeUrlSchema = yup
//   .string()
//   .matches(regex.YOUTUBE_URL, 'invalid_youtube_url')
//   .required()

export const productForm = yup.object().shape({
  name,
  description,
  price,
})

const productSchema = {
  productForm,
}

export default productSchema



