import DrawerStyle from './drawer.module.scss'
import Info from '../Info/Info'
import { useState } from 'react'
import axios from 'axios'
import { useCart } from '../../hooks/useCart'

function Drawer({ onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems, totalCartSum } = useCart()
    const [isOrderComplete, setIsOrderComplete] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post(' https://65c13fcddc74300bce8d824b.mockapi.io/orders', { items: cartItems })
            setOrderId(data.id)
            setIsOrderComplete(true)
            setCartItems([])
        } catch (error) {
            console.error('Что-то пошло не по плану :( ')
        }
        setIsLoading(false)

    }


    return (
        <div className={DrawerStyle.overlay}>
            <div className={DrawerStyle.drawer}>
                <h3 className="mb-30 d-flex justify-between">Корзина <img onClick={onClose} className={DrawerStyle.removeBtn} src="/img/btn-remove.svg" alt="close btn" /></h3>
                {items.length > 0 ? (
                    <div className='d-flex flex-column flex'>
                        <div className={DrawerStyle.cartWrapper}>
                            {items.map((obj, index) => (
                                <div key={index} className={DrawerStyle.cartItem}>
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
                                    <b>{totalCartSum} руб. </b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{Math.floor(totalCartSum / 100 * 5)} руб. </b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="greenBtn">
                                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Info
                        title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                        description={isOrderComplete ? `Ваш заказ ${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                        imgUrl={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
                    />
                )}
            </div>
        </div>
    )
}

export default Drawer