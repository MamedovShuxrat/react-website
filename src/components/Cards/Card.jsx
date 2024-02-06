import { useState } from 'react'
import CardStyle from './Cards.module.scss'

function Card({ id, title, imgUrl, price, onFavorite, onPlus, favorited = false }) {
    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(favorited)

    const onClickPlus = () => {
        onPlus({ title, imgUrl, price })
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onFavorite({ id, title, imgUrl, price })
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={CardStyle.card} >
            <div className={CardStyle.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" />
            </div>
            <img className="mb-15" width={133} height={122} src={imgUrl} alt="sneakers" />
            <p className="mb-15" >{title}</p>
            <div className="d-flex justify-between  align-center">
                <div className="d-flex flex-column ">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <img className={CardStyle.btn} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg " : "/img/btn-plus.svg"} alt="btn" />
            </div>
        </div>
    )
}

export default Card