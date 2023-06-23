import style from './IceCard.module.css'
import {useNavigate} from "react-router-dom";

export const IceCard = ({item}) => {
    const navigate = useNavigate()
    return (
        <div key={item.id}
            className={style.container}
            onClick={() => navigate(`/products/${item.id}`)}>
            <div className={style.imgCont}>
                <img src={item.img} alt=""/>
            </div>
            <div className={style.botText}>
                <h2>{item.name}</h2>
                <p>${item.cost}</p>
            </div>
        </div>
    )
}