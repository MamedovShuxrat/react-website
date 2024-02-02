import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
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
				<div className="card_wrapper d-flex">

					<Card />

					<div className="card">
						<img className="mb-15" width={133} height={122} src="/img/sneakers/2.jpg" alt="sneakers" />
						<p className="mb-15" >Мужские Кроссовки Nike Air Max 270</p>
						<div className="d-flex justify-between  align-center">
							<div className="d-flex flex-column ">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className="btn">
								<img width={11} height={11} src="/img/btn-plus.svg" alt="btn" />
							</button>
						</div>
					</div>
					<div className="card">
						<img className="mb-15" width={133} height={122} src="/img/sneakers/3.jpg" alt="sneakers" />
						<p className="mb-15" >Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className="d-flex justify-between  align-center">
							<div className="d-flex flex-column ">
								<span>Цена:</span>
								<b>8 499 руб.</b>
							</div>
							<button className="btn">
								<img width={11} height={11} src="/img/btn-plus.svg" alt="btn" />
							</button>
						</div>
					</div>
					<div className="card">
						<img className="mb-15" width={133} height={122} src="/img/sneakers/4.jpg" alt="sneakers" />
						<p className="mb-15" >Кроссовки Puma X Aka Boku Future Rider </p>
						<div className="d-flex justify-between  align-center">
							<div className="d-flex flex-column ">
								<span>Цена:</span>
								<b>8 499 руб.</b>
							</div>
							<button className="btn">
								<img width={11} height={11} src="/img/btn-plus.svg" alt="btn" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
