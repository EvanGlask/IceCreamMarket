import styles from './Cart.module.css'
import {Link} from "react-router-dom";
import {IceCardInCart} from "../IceCardInCart/IceCardInCart";
const Cart = () => {

    const _cart = localStorage.getItem('cart')
    const cart = JSON.parse(_cart && _cart !== 'null' && _cart !== 'undefined'? _cart : "[]") ?? [];
    const sum = cart.reduce((acc , val)=>{
        return acc + val.count*val.cost;
    } ,0)

    return(
        <>
            <div className={styles.container}>
                <Link to='/'>Main page</Link>
                <span> / Basket</span>
                <h1 className={styles.h1}>Basket</h1>
                <div className={styles.content}>
                    <div className={cart.length > 1 ? styles.map : styles.solomap}>
                    {cart.map((el) => (
                        <IceCardInCart item={el}/>
                    ))}
                    </div>
                    <div className={styles.price}>
                        <div className={styles._price}>
                            <span style={{fontSize:'18px', fontWeight:'600'}}>Sub total:</span><span>${sum}</span>
                        </div>
                        <hr style={{margin: '32px 0 24px'}}/>
                        <button className={styles.btn}>Check out</button>
                    </div>
                </div>
            </div>

        </>
)}

export default Cart