import DrawerStyle from './drawer.module.scss'

function Drawer({ onClose, cartItems }) {
    console.log(cartItems, 'catrItems');
    return (
        <div className={DrawerStyle.overlay}>
            <div className={DrawerStyle.drawer}>
                <h3 className="mb-30 d-flex justify-between">Корзина <img onClick={onClose} className={DrawerStyle.removeBtn} src="/img/btn-remove.svg" alt="close btn" /></h3>
                <div className={DrawerStyle.cartWrapper}>

                    {cartItems.map((cart) => (

                        <div className={DrawerStyle.cartItem}>
                            <img className="mr-20" width={70} height={70} src={cart.imgUrl} alt="snekears" />
                            <div className="mr-20">
                                <p className="mb-5">{cart.title}</p>
                                <b>{cart.price}</b>
                            </div>
                            <img className={DrawerStyle.removeBtn} src="/img/btn-remove.svg" alt="close btn" />
                        </div>
                    ))}

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