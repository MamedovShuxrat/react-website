import { useContext } from "react"
import { AppContext } from "../App"

export const useCart = () => {
    const { cartItems, setCartItems } = useContext(AppContext)
    const totalCartSum = cartItems.reduce((sum, obj) => {
        const price = parseFloat(obj.price.replace(/\s/g, '').replace(',', '.'))
        return isNaN(price) ? sum : price + sum
    }, 0)

    return { cartItems, totalCartSum, setCartItems }
}