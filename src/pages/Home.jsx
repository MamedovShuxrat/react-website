import React from "react"
import Card from "../components/Cards/Card"

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
}) {
    return (
        <div className="content p-40">
            <div className="d-flex justify-between mb-40 align-center">
                <h1 >{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search_block">
                    <img src="/img/search.svg" alt="search" />
                    {searchValue && (
                        <img
                            onClick={() => setSearchValue('')}
                            className="clear cu-p"
                            src="/img/btn-remove.svg"
                            alt="Clear"
                        />
                    )}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                </div>
            </div>

            <div className="card_wrapper d-flex flex-wrap justify-between">
                {items
                    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) => (
                        <Card
                            key={index}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                            {...item}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Home