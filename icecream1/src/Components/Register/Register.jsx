import styles from './Register.module.css'
import {ReactComponent as Close} from "../SVG/Close.svg";
import {useNavigate, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Main from "../Home/Main/Main";


const Register = () => {
      const navigate = useNavigate();

      const users = JSON.parse(localStorage.getItem('users') ?? '[]') ?? [];

      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [pass, setPass] = useState('')

      const [usersArr, setUsersArr] = useState(users ?? [])

    useEffect( ()=> {
        if(usersArr?.length>0){
            localStorage.setItem('users', JSON.stringify(usersArr))
        }
    }, [usersArr])

    const register = () => {
          const newUser = {name: name, email: email, pass: pass}
        if (usersArr?.length > 0){
            const checkMail = usersArr?.filter((el) => el?.email === newUser?.email)
            if(checkMail?.length>0){
                alert('Эта почта занята')
                window.location.reload()
            }else {
                setUsersArr([...usersArr, newUser])
                alert("Аккаунт зарегестрирован")
                window.location.reload()
                navigate('/signin')
            }
        }else {
            setUsersArr([...usersArr, newUser])
            alert("Аккаунт зарегестрирован")
            window.location.reload()
            navigate('/login')
            }
        }

    return(
        <>
            <Main/>
            <div className={styles.container}>
              <div className={styles.content}>
                  <form
                  style={{
                  display: 'flex',
                  textAlign: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}>
                    <Close  onClick={() => navigate('/')} className={styles.close}/>
                    <h1 className={styles.h1}>Create an account</h1>
                    <p className={styles.p}>Name</p>
                    <input
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        type="text"
                        placeholder='Your name'  />
                    <p className={styles.p}>Email</p>
                    <input
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        type="text"
                        placeholder='Your email'/>

                    <p className={styles.p}>Password</p>
                    <input
                        value={pass}
                        onChange={(e)=> setPass(e.target.value)}
                        type="password"
                        placeholder='Enter your password'  />
                    <button onClick={register} className={styles.button}>Register</button>
                    <h2>Do you already have an account?</h2>
                    <Link to="/login">Sign in</Link>
                  </form>
                </div>
              </div>
            </>
  )
}

export default Register