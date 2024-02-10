import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, item) => {
      state.items.push(item.payload)
    },
    clear: (state) => {
      state.items = []
    },
    updateQuantity: (state, item) => {
      const { itemId, quantity } = item.payload
      console.log(item)
      console.log(itemId, quantity)
      const items = state.items
      for (let index = 0; index < items.length; index++) {
        const item = items[index]
        if (item['id'] == itemId) {
          if (quantity == 0) {
            // delete the item from items
            items.splice(index, 1)
          } else {
            item['quantity'] = quantity
          }

          break
        }
      }
      state.items = items
    },
    removeItem: (state) => {},
  },
})

export const { addItem, removeItem, updateQuantity, clear } = cartSlice.actions
export default cartSlice.reducer
