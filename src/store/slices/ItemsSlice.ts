import { Item } from './../../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ItemsState {
    items: Item[]
    loading: boolean
    error: string
}

const initialState: ItemsState = {
    items: [],
    loading: false,
    error: ""
}

export const itemsSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        fetchItems(state) {
            state.loading = true
        },
        fetchItemsSuccess(state, action: PayloadAction<Item[]>) {
            state.items = action.payload
            state.loading = false
            state.error = ""

        },
        fetchItemsError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
    }
})
