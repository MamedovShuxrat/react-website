import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"

function Header(props) {
    const { totalCartSum } = useCart();

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to='/' exact>
                <div className="header_left d-flex align-center">
                    <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="header-logo" />
                    <div className="header_info">
                        <h3 className="text-uppercase">React sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="header_right d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p" >
                    <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="cart" />{
                        totalCartSum ? <b style={{ color: '#9DD458' }}> {totalCartSum} руб.</b> : <span>{totalCartSum} руб.</span>
                    }
                </li>
                <li className="mr-20 cu-p">
                    <Link to='/favorites' exact>
                        <img width={18} height={18} src="/img/heart.svg" alt="heart" />
                    </Link>
                </li>
                <Link to='/orders' exact>
                    <li className="mr-20 cu-p">
                        <img width={18} height={18} src="/img/user.svg" alt="user" />
                    </li>
                </Link>
            </ul>
        </header>
    )
}

export default Header