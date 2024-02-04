import Card from "./components/Cards/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import { useEffect, useState } from "react";

function App() {
	const [cartOpened, setCartOpened] = useState(false)
	const [data, setData] = useState([])
	const [cartItems, setCartItems] = useState([])

	useEffect(() => {
		fetch('https://65be98cedcfcce42a6f2bae8.mockapi.io/items')
			.then((res) => {
				return res.json()
			})
			.then((res) => (setData(res)))

	}, [])

	const addToCart = (obj) => {
		setCartItems(prev => [...prev, obj])
	}

	return (
		<div className="wrapper clear">
			{cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} />}
			<Header openCart={() => setCartOpened(true)} />
			<div className="content p-40">
				<div className="d-flex justify-between mb-40 align-center">
					<h1 >Все кроссовки</h1>
					<div className="search_block">
						<img src="/img/search.svg" alt="search" />
						<input placeholder="Поиск ..." />
					</div>
				</div>
				<div className="card_wrapper d-flex flex-wrap justify-between">
					{data.map((obj) => (
						<Card
							title={obj.title}
							price={obj.price}
							imgUrl={obj.imgUrl}
							onClickFavorite={() => (obj)}
							onClickPlus={() => addToCart(obj)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
