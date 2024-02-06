import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Drawer from "./components/Drawer/Drawer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [favorites, setFavorites] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [cartOpened, setCartOpened] = useState(false)

	useEffect(() => {
		axios.get('https://65be98cedcfcce42a6f2bae8.mockapi.io/items')
			.then((res) => {
				setItems(res.data)
			}).catch((error) => {
				console.error('Error fetching items:', error)
			})

		axios.get('https://65be98cedcfcce42a6f2bae8.mockapi.io/cart')
			.then((res) => {
				setCartItems(res.data)
			}).catch((error) => {
				console.error('Error fetching cart items:', error)
			})

		axios.get('https://65c13fcddc74300bce8d824b.mockapi.io/favorites')
			.then((res) => {
				setFavorites(res.data)
			}).catch((error) => {
				console.error('Error fetching favorites:', error)
			})

	}, [])
	const onAddToCart = (obj) => {
		axios.post('https://65be98cedcfcce42a6f2bae8.mockapi.io/cart', obj)
		setCartItems((prev) => [...prev, obj])
	}

	const onRemoveItem = (id) => {
		axios.delete(`https://65be98cedcfcce42a6f2bae8.mockapi.io/cart/${id}`)
		setCartItems((prev) => prev.filter((item) => item.id !== id))
	}


	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => favObj.id === obj.id)) {
				axios.delete(`https://65c13fcddc74300bce8d824b.mockapi.io/favorites/${obj.id}`)
				console.log('delete fav')

			} else {
				const { data } = await axios.post('https://65c13fcddc74300bce8d824b.mockapi.io/favorites', obj)
				setFavorites((prev) => [...prev, data])
				console.log(data)
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты')
		}
	}
	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value)
	}
	return (
		<div className="wrapper clear">
			{cartOpened && (
				<Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
			)}
			<Header onClickCart={() => setCartOpened(true)} />
			<Routes>
				<Route path="/" exact
					element={
						<Home
							items={items}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							onChangeSearchInput={onChangeSearchInput}
							onAddToFavorite={onAddToFavorite}
							onAddToCart={onAddToCart}
						/>
					}
				/>

				<Route path="/favorites" exact
					element={
						<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
					}
				/>
			</Routes>
		</div>
	)
}

export default App 
