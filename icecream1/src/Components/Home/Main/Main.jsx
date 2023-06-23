import style from './Main.module.css'
import {ReactComponent as Hearth} from '../../SVG/Hearth.svg';
import {IceCard} from "../../IceCard/IceCard";
import {ice} from "../../../IceData"

const Main = () => {
    return (
        <>
            <h1 className={style.h1}>I <Hearth style={{margin: '0 16px 0'}}/> ICE CREAM</h1>
            <div className={style.flex}>
                <div className={style.flex}>
                    <div className={style.container}>
                        {ice.map((el) => (
                            <IceCard item={el} />
                          )
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main