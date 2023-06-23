import {ice} from "../../IceData";
import styles from './BigCard.module.css'
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {ReactComponent as Cart} from "./Cart.svg";

const BigCard = () => {
    const [iceId, setIceId] = useState(null)
    const [iceData, setIceData] = useState([])
    const navigate = useLocation()
    const regex = /\d+/g;
    useEffect(() => {
        setIceId(+navigate.pathname.match(regex)[0]);
    }, [navigate.pathname])
    useEffect( () => {
        if(iceId) {
            setIceData(ice.filter(el => el.id === iceId)[0])
        }
    }, [iceId])

    const [count, setCount] = useState(1)
    const plus = () => setCount(prevState => prevState + 1)
    const minus = () =>{
        if(count>=2){
            setCount(prevState => prevState - 1)
        }
    }

    const _cart = localStorage.getItem('cart')
    const cart = JSON.parse(_cart && _cart !== 'null' && _cart !== 'undefined'? _cart : "[]") ?? [];
    const sum = cart.reduce((acc , val)=>{
        return acc + val.count;
    } ,0)
    console.log(sum);
    const func = (e) => {
        e.preventDefault()
        const itemInCart = cart?.filter(el => el.id === iceData.id)
        if(itemInCart.length) {
            // {img: '', count: 1, price: '', title: ''}
            const newItem = itemInCart?.map((el) => ({...el, count: el?.count + count}))
            const arrayIce = [newItem[0],...cart?.filter((el) => el?.id !== itemInCart[0]?.id)];
            console.log(1, arrayIce, newItem);
            localStorage.setItem('cart', JSON.stringify(arrayIce));
            window.location.reload()
        } else {
            const newIce = {id: iceData?.id, img: iceData?.img, count: count, cost: iceData?.cost, name: iceData?.name}
            console.log(2,newIce, [newIce, ...cart]);
            localStorage.setItem('cart', JSON.stringify([newIce, ...cart]));
            window.location.reload()
        }
    }


    return (
        <>
            <div key={ice.id} className={styles.container}>
                <div style={{marginBottom:'30px'}}>
                    <Link to="/">Main page</Link>
                    <span> / </span>
                    <span>Product card</span>
                </div>
                <div className={styles.content}>
                    <div className={styles.img}>
                        <img  src={iceData.img} alt=""/>
                    </div>
                    <div className={styles.rightDiv}>
                        <span style={{backgroundColor:'rgba(242, 242, 250, 1)', borderRadius:'26px', padding:'0.2em 0.5em'}}>SKU:BXD100BLK</span>
                        <h2 className={styles.h2} style={{fontSize:'36px'}}>{iceData.name}</h2>
                        <h5>Description:</h5>
                        <p style={{padding:'0'}}>Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.</p>
                        <br/>
                        <p style={{padding:'0'}}>Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.</p>
                        <div className={styles.counter}>
                            <h2 className={styles.h2}>$
                                {iceData.cost}</h2>
                            <button onClick={minus}>-</button>
                            <span>{count}</span>
                            <button onClick={plus}>+</button>
                        </div>
                        <button onClick={func} className={styles.button}> <Cart style={{marginRight:'10px'}}/> Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BigCard