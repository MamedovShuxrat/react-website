import DrawerStyle from './drawer.module.scss'
import Cart from './Cart'

function Drawer() {
    return (
        <div style={{ display: 'none' }} className={DrawerStyle.overlay}>
            <div className={DrawerStyle.drawer}>
                <h3 className="mb-30 d-flex justify-between">Корзина <img className={DrawerStyle.removeBtn} src="/img/btn-remove.svg" alt="close btn" /></h3>
                <div className={DrawerStyle.cartWrapper}>
                    <Cart />
                    <Cart />
                    <Cart />
                </div>
                <div className={DrawerStyle.cartTotal}>
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