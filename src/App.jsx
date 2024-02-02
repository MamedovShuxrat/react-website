import Card from "./components/Cards/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";

function App() {

	const sneakersArr = [
		{
			title: 'Мужские Кроссовки Nike Blazer Mid Suede',
			price: '12 199 руб.',
			imgUrl: './img/sneakers/1.jpg'
		},
		{
			title: 'Мужские Кроссовки Nike Air Max 270',
			price: '14 199 руб.',
			imgUrl: './img/sneakers/2.jpg'
		},
		{
			title: 'Мужские Кроссовки Nike Blazer Mid Suede',
			price: '13 990 руб.',
			imgUrl: './img/sneakers/3.jpg'
		},
		{
			title: 'Кроссовки Puma X Aka Boku Future Rider',
			price: '15 199 руб.',
			imgUrl: './img/sneakers/4.jpg'
		},
		{
			title: 'Мужские Кроссовки Under Armour Curry 8',
			price: '9 199 руб.',
			imgUrl: './img/sneakers/5.jpg'
		},
		{
			title: 'Мужские Кроссовки Nike Kyrie 7',
			price: '11 299 руб.',
			imgUrl: './img/sneakers/6.jpg'
		},
		{
			title: 'Мужские Кроссовки Jordan Air Jordan 11',
			price: '10 799 руб.',
			imgUrl: './img/sneakers/7.jpg'
		},
		{
			title: 'Мужские Кроссовки Nike LeBron XVIII',
			price: '16 499 руб.',
			imgUrl: './img/sneakers/8.jpg'
		},
		{
			title: 'Мужские Кроссовки Nike Lebron XVIII Low',
			price: '13 999 руб.',
			imgUrl: './img/sneakers/9.jpg'
		},
		{
			title: 'Мужские Кроссовки Nike Blazer Mid Suede',
			price: '8 499 руб.',
			imgUrl: './img/sneakers/10.jpg'
		},
		{
			title: 'Кроссовки Puma X Aka Boku Future Rider',
			price: '8 999 руб.',
			imgUrl: './img/sneakers/1.jpg'
		},
		{
			title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
			price: '11 299 руб.',
			imgUrl: './img/sneakers/2.jpg'
		},

	]
	return (
		<div className="wrapper clear">
			<Drawer />
			<Header />
			<div className="content p-40">
				<div className="d-flex justify-between mb-40 align-center">
					<h1 >Все кроссовки</h1>
					<div className="search_block">
						<img src="/img/search.svg" alt="search" />
						<input placeholder="Поиск ..." />
					</div>
				</div>
				<div className="card_wrapper d-flex flex-wrap justify-between">
					{sneakersArr.map((obj) => (
						<Card title={obj.title} price={obj.price} imgUrl={obj.imgUrl} />

					))}
				</div>
			</div>
		</div>
	);
}

export default App;
