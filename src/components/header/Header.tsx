import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import cl from "./Header.module.css"

const Header = () => {

    const { cart } = useAppSelector(state => state.cart)

    return (
        <div className={cl.container}>
            <div className={cl.content}>
                <div>
                    <Link className={cl.link} to={"/"}>МАГАЗИН</Link>
                </div>
                <div style={{ display: "flex" }}>
                    <Link className={cl.link} to={"/"}>ГЛАВНАЯ</Link>
                    <div style={{ display: "flex" }}>
                        <Link className={`${cl.link} ${cl.cart}`} to={"/cart"}>КОРЗИНА<div className={cart.length ? `${cl.cartAmount}` : `${""}`}>{cart.length ? cart.length : ""}</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;