import styles from './SignIn.module.css'
import {ReactComponent as Close} from "../SVG/Close.svg";
import {useNavigate, Link} from "react-router-dom";
import {useState} from "react";
import Main from "../Home/Main/Main";


const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const users = JSON.parse(localStorage.getItem('users'))
  const getName = (userName) =>{
    console.log(users, userName)
    const myUserName = users.filter((e)=> e.email === userName.email)[0]
    localStorage.setItem('myUserName', myUserName.name)
  }
  const logIn = (e) => {
    e.preventDefault();
    const myUser = {email: email, pass: pass};
    if (users?.length > 0) {
      const checkMail = users?.filter((el) => el?.email === myUser?.email)
      if (checkMail?.length < 0) {
        alert('пользователя с такой почтой не существует')
      } else {
        const userIsInArray = users?.filter((el) => el?.email === myUser?.email)[0]
        if (userIsInArray?.pass === myUser.pass) {
          localStorage.setItem('myUser', JSON.stringify(myUser));
          getName(myUser)
          navigate('/');
          window.location.reload();
        } else {
          alert('НЕПРАВИЛЬНЫЙ ПАРОЛЬ!!')
        }
        // window.location.reload();
      }
    } else {
      alert("чел у тебя 0 юзеров иди нахуй")
      window.location.reload();
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
          <h1 className={styles.h1}>Log in to your account</h1>
          <p className={styles.p}>Email</p>
          <input
              onChange={ (el) => setEmail(el.target.value)}
              name="email"
              type="text"
              placeholder='Your email' />
          <p className={styles.p}>Password</p>
          <input
              onChange={ (el) => setPass(el.target.value)}
              name="password"
              type="password"
              placeholder='Enter your password' />
          <button onClick={logIn} type="submit" className={styles.button}>Log In</button>
          <h2 style={{fontWeight: '400'}}>No account?<Link to="/register"> Create one</Link></h2>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignIn