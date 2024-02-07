import { useState } from 'react'
import CardStyle from './Cards.module.scss'
import ContentLoader from 'react-content-loader'
import { useContext } from "react";
import { AppContext } from '../../App';

function Card({
    id,
    title,
    imgUrl,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false
}) {
    const { isItemAdded } = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited)
    const obj = { id, parentId: id, title, imgUrl, price }

    const onClickPlus = () => {
        onPlus(obj)
    }

    const onClickFavorite = () => {
        onFavorite(obj)
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={CardStyle.card} >
            {
                loading ? <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> : <>
                    <div className={CardStyle.favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" />
                    </div>
                    <img className="mb-15" width={133} height={122} src={imgUrl} alt="sneakers" />
                    <p className="mb-15" >{title}</p>
                    <div className="d-flex justify-between  align-center">
                        <div className="d-flex flex-column ">
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        <img className={CardStyle.btn} onClick={onClickPlus} src={isItemAdded(id) ? "/img/btn-checked.svg " : "/img/btn-plus.svg"} alt="btn" />
                    </div>
                </>
            }
        </div>
    )
}

export default Card