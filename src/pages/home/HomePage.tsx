import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchItems } from '../../store/actions/asyncActions';
import { cartSlice } from '../../store/slices/cartSlice';
import cl from "./HomePage.module.css"

const HomePage = () => {
    const dispatch = useAppDispatch()
    const { error, items, loading } = useAppSelector(state => state.shop)

    useEffect(() => {
        dispatch(fetchItems())
    }, [])
    return (
        <div className={cl.cardsContainer}>
            <div className={cl.content}>
                {loading ? <h1>Идет загрузка...</h1> :
                    (
                        items.slice(0, 20).map(item => (
                            <>
                                <div className={cl.card}>
                                    <div>
                                        <img className={cl.image} src={item.url} alt={item.title} />
                                        <p>{item.id}. {item.title.slice(1, 40)}</p>
                                        <p>Цена: {item.price}</p>
                                        <p>Количество: {item.count}</p>
                                    </div>
                                    <div>
                                    <button
                                        onClick={() => dispatch(cartSlice.actions.addItem(item))}
                                    >Добавить в корзину</button>
                                    </div>
                                </div>
                            </>
                        ))
                    )}
            </div>
        </div>
    );
};

export default HomePage;