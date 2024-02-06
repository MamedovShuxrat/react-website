import DrawerStyle from './drawer.module.scss'

function Drawer({ onClose, onRemove, items = [] }) {


    return (
        <div className={DrawerStyle.overlay}>
            <div className={DrawerStyle.drawer}>
                <h3 className="mb-30 d-flex justify-between">Корзина <img onClick={onClose} className={DrawerStyle.removeBtn} src="/img/btn-remove.svg" alt="close btn" /></h3>
                {items.length > 0 ? (
                    <div>
                        <div className={DrawerStyle.cartWrapper}>
                            {items.map((obj) => (
                                <div className={DrawerStyle.cartItem}>
                                    <img className="mr-20" width={70} height={70} src={obj.imgUrl} alt="snekears" />
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className="removeBtn cu-p"
                                        src="/img/btn-remove.svg"
                                        alt="Remove"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={DrawerStyle.cartTotal}>
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>21 498 руб. </b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>1074 руб. </b>
                                </li>
                            </ul>
                            <button className="greenBtn">
                                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
                        <h2>Корзина пустая</h2>
                        <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button onClick={onClose} class="greenButton">
                            <img src="/img/arrow.svg" alt="Arrow" />
                            Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Drawer