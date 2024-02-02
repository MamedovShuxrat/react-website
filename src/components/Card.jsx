function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unliked.svg" alt="unliked" />
            </div>
            <img className="mb-15" width={133} height={122} src="/img/sneakers/1.jpg" alt="sneakers" />
            <p className="mb-15" >Мужские Кроссовки Nike Blazer Mid Suede</p>
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
    )
}

export default Card