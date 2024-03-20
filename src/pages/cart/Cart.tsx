import { useAppSelector } from "../../hooks/reduxHooks";
import cl from "./Cart.module.css"

const Cart = () => {

    const { cart } = useAppSelector(state => state.cart)

    return (
        <div>
            {cart && cart.map(el => (
                <div>
                    <h1>{el.title}</h1>
                    <img className={cl.image} src={el.url} alt={el.title} />
                </div>
            ))}
        </div>
    );
};

export default Cart;