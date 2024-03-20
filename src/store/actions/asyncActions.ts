import { itemsSlice } from './../slices/ItemsSlice';
import { Item } from './../../types/types';
import axios from 'axios';
import { AppDispatch } from './../index';


export const fetchItems = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(itemsSlice.actions.fetchItems())
        const response = await axios.get<Item[]>("https://jsonplaceholder.typicode.com/photos")

        const modyfied = response.data.map((el) => {
            el.count=0
            el.price=100
            return el
        })

        dispatch(itemsSlice.actions.fetchItemsSuccess(modyfied))
    } catch (error) {
        dispatch(itemsSlice.actions.fetchItemsError("Что-то пошло не так"))
    }
}