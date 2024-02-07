import Card from "../components/Cards/Card"
import { AppContext } from "../App"
import { useContext, useEffect, useState } from "react"
import axios from "axios";



function Orders() {
    const { onAddToFavorite, onAddToCart } = useContext(AppContext);
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        try {
            async function fetchOrders() {
                const { data } = await axios.get('https://65c13fcddc74300bce8d824b.mockapi.io/orders')
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            }
            fetchOrders()
        } catch (error) {
            console.log('Ошибка при запроса заказа', error)
        }
    }, [])

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои Покупки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                    <Card key={index}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onPlus={(obj) => onAddToCart(obj)}
                        loading={isLoading}
                        {...item} />
                ))}
            </div>
        </div>
    )
}

export default Orders