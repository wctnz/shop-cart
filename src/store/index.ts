import { cartSlice } from './slices/cartSlice';
import { itemsSlice } from './slices/ItemsSlice';
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        shop: itemsSlice.reducer,
        cart: cartSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>