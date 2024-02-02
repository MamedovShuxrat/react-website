function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h3 className="mb-30 d-flex justify-between">Корзина <img className="remove_btn cu-p" src="/img/btn-remove.svg" alt="close btn" /></h3>
                <div className="cart_item-wrapper">
                    <div className="cart_item d-flex align-center p-20 mb-20">
                        <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="snekears" />
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="remove_btn" src="/img/btn-remove.svg" alt="close btn" />
                    </div>

                    <div className="cart_item d-flex align-center p-20 mb-20">
                        <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="snekears" />
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="remove_btn" src="/img/btn-remove.svg" alt="close btn" />
                    </div>

                </div>
                <div className="cart-total">
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%:  </span>
                            <div></div>
                            <b>1074 руб.  </b>
                        </li>
                    </ul>
                    <button className="greenBtn">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer