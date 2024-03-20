import { Item } from '../../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ItemsState {
    cart: Item[]
}

const initialState: ItemsState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<Item>) {
            state.cart.push(action.payload)
        },
    }
})
