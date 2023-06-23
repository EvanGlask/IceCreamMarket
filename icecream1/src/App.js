import './App.css';
import {Routes, Route, Router} from "react-router-dom";
import Home from "./Components/Home/Home"
import BigCard from "./Components/BigCard/BigCard";
import Register from "./Components/Register/Register";
import SignIn from "./Components/SignIn/SignIn";
import Cart from './Components/Cart/Cart'
import {Layout} from "./Components/Home/Layout";
import Main from "./Components/Home/Main/Main";

function App() {
  return (
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Main />}/>
                  <Route path="register" element={<Register />} />
                  <Route path="login" element={<SignIn />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="products/:id" element={<BigCard />} />
              </Route>
          </Routes>
  )
}

export default App;
