import {ReactComponent as IceCream} from '../../SVG/IceCream.svg';
import {ReactComponent as Logo} from '../../SVG/Logo.svg';
import {ReactComponent as User} from '../../SVG/User.svg';
import {ReactComponent as Cart} from '../../SVG/Cart.svg';
import {ReactComponent as Ellipse} from '../../SVG/Ellipse.svg';
import style from './Header.module.css'
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from "react";
const Header = () => {
    const _cart = localStorage.getItem('cart')
    const cart = JSON.parse(_cart && _cart !== 'null' && _cart !== 'undefined'? _cart : "[]") ?? [];
    const sum = cart.reduce((acc , val)=>{
        return acc + val.count;
    } ,0)

  const navigate = useNavigate();

  const [loggedUser, setLoggedUser] = useState(false)
    const localUser = JSON.parse(localStorage.getItem("myUser"))
    const name = localStorage.getItem('myUserName')


    useEffect(() => {
        if(localUser === null || localUser === 'null'){

           setLoggedUser(false)
  } else {
            setLoggedUser(true)
        }
        }, [localUser])

    const logOut = () => {
        localStorage.removeItem('myUserName')
        localStorage.removeItem('myUser')
        setLoggedUser(false)
        window.location.reload()
    }

    return (
        <div className={style.container}>
            <div className={style.leftSvg}>
                <IceCream/>
                <Logo/>
            </div>
            <div className={style.rightSvg}>
                <div className={style.user}>
                    <User/>
                    {
                        loggedUser ?
                    <button onClick={logOut}>{name} / выйти</button>
                            :
                    <button onClick={() => navigate('/register')}> Sign up / Sign in</button>
                    }
                </div>
                <div className={style.cart}>
                    <div className={style.relat}>
                        <Cart />
                        {
                            cart.length > 0 && (
                                <>
                                    <span className={style.span}>{sum}</span>
                                    <Ellipse className={style.ellipse}/>
                                </>
                            )
                        }
                    </div>
                    <button onClick={()=>navigate('/cart')}>Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Header