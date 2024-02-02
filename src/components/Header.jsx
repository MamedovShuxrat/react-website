function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="header_left d-flex align-center">
                <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="header-logo" />
                <div className="header_info">
                    <h3 className="text-uppercase">React sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="header_right d-flex">
                <li className="mr-30 cu-p">
                    <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="cart" />
                    <span>1205 руб</span>
                </li>
                <li className="mr-20 cu-p">
                    <img width={18} height={18} src="/img/user.svg" alt="user" />

                </li>
            </ul>

        </header>
    )
}

export default Header