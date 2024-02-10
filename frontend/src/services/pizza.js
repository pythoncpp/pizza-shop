import axios from 'axios'
import { createError, createUrl } from './utils'

export async function getAllPizzas() {
  try {
    const url = createUrl('pizza/')
    const headers = {
      headers: {
        token: sessionStorage['token'],
      },
    }
    const response = await axios.get(url, headers)
    return response.data
  } catch (ex) {
    return createError(ex)
  }
}
