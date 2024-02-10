import axios from 'axios'
import { createError, createUrl } from './utils'

export async function placeOrder(items, totalAmount) {
  try {
    const url = createUrl('order/')
    const headers = {
      headers: {
        token: sessionStorage['token'],
      },
    }
    const body = {
      totalAmount,
      items: items.map((item) => {
        return {
          pizzaId: item['id'],
          quantity: item['quantity'],
          totalAmount: item['quantity'] * item['price'],
        }
      }),
    }
    const response = await axios.post(url, body, headers)
    return response.data
  } catch (ex) {
    return createError(ex)
  }
}

export async function getAllOrders() {
  try {
    const url = createUrl('order/')
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
