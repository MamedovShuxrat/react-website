import DrawerStyle from './drawer.module.scss'

function Cart() {
    return (
        <div className={DrawerStyle.cartItem}>
            <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="snekears" />
            <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
            </div>
            <img className={DrawerStyle.removeBtn} src="/img/btn-remove.svg" alt="close btn" />
        </div>
    )
}

export default Cart 