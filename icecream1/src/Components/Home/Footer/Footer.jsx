import style from './Footer.module.css'
import {ReactComponent as Logo} from '../../SVG/Logo.svg';
import {ReactComponent as IceCream} from '../../SVG/IceCream.svg';

const Footer = () => {
    return(
        <div className={style.container}>
            <div className={style.topDiv1}>
                <div className={style.topDiv}>
                    <div className={style.logo}>
                        <IceCream/>
                        <Logo/>
                    </div>
                    <div className={style.btn}>
                        <button>Our Products</button>
                        <button>Privacy Terms</button>
                        <button>Twitter</button>
                        <button>Facebook</button>
                        <button>Email</button>
                    </div>
                </div>
            </div>
            <div className={style.botDiv}>
                <span>© 2021 Justice-team. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer