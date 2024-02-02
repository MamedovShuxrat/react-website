import CardStyle from './Cards.module.scss'

function Card(props) {
    const { title, price, imgUrl } = props
    return (
        <div className={CardStyle.card}>
            <div className={CardStyle.favorite}>
                <img src="/img/unliked.svg" alt="unliked" />
            </div>
            <img className="mb-15" width={133} height={122} src={imgUrl} alt="sneakers" />
            <p className="mb-15" >{title}</p>
            <div className="d-flex justify-between  align-center">
                <div className="d-flex flex-column ">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <button className={CardStyle.btn}>
                    <img width={11} height={11} src="/img/btn-plus.svg" alt="btn" />
                </button>
            </div>
        </div>
    )
}

export default Card