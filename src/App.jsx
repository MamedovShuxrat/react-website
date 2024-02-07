import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Drawer from "./components/Drawer/Drawer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Orders from "./pages/Orders"

export const AppContext = createContext({})

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [favorites, setFavorites] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [cartOpened, setCartOpened] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
			const cartRes = await axios.get('https://65be98cedcfcce42a6f2bae8.mockapi.io/cart')
			const favoritesRes = await axios.get('https://65c13fcddc74300bce8d824b.mockapi.io/favorites')
			const itemsRes = await axios.get('https://65be98cedcfcce42a6f2bae8.mockapi.io/items')
			setIsLoading(false)
			setCartItems(cartRes.data)
			setFavorites(favoritesRes.data)
			setItems(itemsRes.data)
		}
		fetchData()

	}, [])

	const onAddToCart = (obj) => {
		try {
			if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
				setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
				axios.delete(`https://65be98cedcfcce42a6f2bae8.mockapi.io/cart/${obj.id}`)

			} else {
				setCartItems((prev) => [...prev, obj])
				axios.post('https://65be98cedcfcce42a6f2bae8.mockapi.io/cart', obj)
			}
		} catch (error) {
			console.error('ошибка добавления в корзину', error)
		}
	}

	const onRemoveItem = (id) => {
		try {
			setCartItems((prev) => prev.filter((item) => item.id !== id))
			axios.delete(`https://65be98cedcfcce42a6f2bae8.mockapi.io/cart/${id}`)
		} catch (error) {
			console.error('Не удалось удалить карточку', error)
		}
	}


	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
				axios.delete(`https://65c13fcddc74300bce8d824b.mockapi.io/favorites/${obj.id}`)
				setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))

			} else {
				const { data } = await axios.post('https://65c13fcddc74300bce8d824b.mockapi.io/favorites', obj)
				setFavorites((prev) => [...prev, data])
			}
		} catch (error) {
			console.error('Не удалось добавить в фавориты')
		}
	}
	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value)
	}

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.parentId) === Number(id))
	}
	return (
		<AppContext.Provider value={{
			items,
			cartItems,
			favorites,
			isItemAdded,
			onAddToFavorite,
			onAddToCart,
			setCartOpened,
			setCartItems,
		}}>
			<div className="wrapper clear">
				{cartOpened && (
					<Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
				)}
				<Header onClickCart={() => setCartOpened(true)} />
				<Routes>
					<Route path="/" exact="true"
						element={
							<Home
								items={items}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								onChangeSearchInput={onChangeSearchInput}
								onAddToFavorite={onAddToFavorite}
								onAddToCart={onAddToCart}
								isLoading={isLoading}
							/>
						}
					/>

					<Route path="/favorites" exact="true"
						element={
							<Favorites />
						}
					/>

					<Route path="/orders" exact="true"
						element={
							<Orders />
						}
					/>
				</Routes>
			</div>
		</AppContext.Provider>
	)
}

export default App



