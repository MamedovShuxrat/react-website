import { useState } from 'react'
import CardStyle from './Cards.module.scss'

function Card({ title, price, imgUrl, onClickFavorite, onClickPlus }) {
    const [isAdd, setIsAdd] = useState(false)

    const handlePlus = () => {
        onClickPlus({ title, price, imgUrl })
        setIsAdd(!isAdd)
    }

    return (
        <div className={CardStyle.card} >
            <div className={CardStyle.favorite}  >
                <img src="/img/unliked.svg" alt="unliked" />
            </div>
            <img className="mb-15" width={133} height={122} src={imgUrl} alt="sneakers" />
            <p className="mb-15" >{title}</p>
            <div className="d-flex justify-between  align-center">
                <div className="d-flex flex-column ">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <img className={CardStyle.btn} onClick={handlePlus} src={isAdd ? "/img/btn-checked.svg " : "/img/btn-plus.svg"} alt="btn" />
            </div>
        </div>
    )
}

export default Card