import styles from './IceCardInCart.module.css'
import {ReactComponent as Krestik} from "../SVG/Krestik.svg";

const IceCardInCart = ({item}) => {
    const _cart = localStorage.getItem('cart')
    const cart = JSON.parse(_cart && _cart !== 'null' && _cart !== 'undefined'? _cart : "[]") ?? [];
    const deleteItem = () => {
        const filteredArr = cart.filter((el) => el.id !== item.id);
        localStorage.setItem('cart', JSON.stringify(filteredArr))
        window.location.reload()
    }

    return (
        <>
            <div className={styles.container} key={item.id}>
                <div className={styles.imgCont}>
                    <img className={styles.img} src={item.img} alt=""/>
                </div>
                <div className={styles.gap}>
                    <div>
                        <span className={styles.title}>{item.name}</span>
                        <span className={styles.count}>{item.count} pcs.</span>
                    </div>
                    <div className={styles.price}>
                        <span style={{marginRight: '16px'}}>${item.cost}</span>
                        <Krestik onClick={deleteItem} style={{cursor: 'pointer'}}/>
                    </div>
                </div>
            </div>
            <hr style={{margin:'24px 69px 24px 0'}}/>
        </>

    )
}

export {IceCardInCart}