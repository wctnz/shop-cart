import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import cl from "./Header.module.css"

const Header = () => {

    const { cart } = useAppSelector(state=> state.cart)

    return (
        <div className={cl.container}>
            <div className={cl.content}>
            <div>
                <Link className={cl.link} to={"/"}>МАГАЗИН</Link>
            </div>
            <div>
                <Link className={cl.link} to={"/"}>ГЛАВНАЯ</Link>
                <Link className={`${cl.link} ${ cl.cart }`} to={"/cart"} data-count={cart.length}>КОРЗИНА</Link>
            </div>
            </div>
        </div>
    );
};

export default Header;