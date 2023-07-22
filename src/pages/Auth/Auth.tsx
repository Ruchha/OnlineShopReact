import React, {FC, useState} from 'react';
import classes from "./auth.module.scss"
import { Link, useActionData, useLocation, useNavigate } from 'react-router-dom';
import  "../../../public/life.svg";
import "../../../public/star.svg"
import "../../../public/visible.svg"
import "../../../public/notVisible.svg"
import "../../../public/google.png"
import "../../../public/vk.png"
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authenticate } from '../../store/reducers/authSlice';
import axios from 'axios';

const Auth: FC = () => {
  const [isVisible, setVisible] = useState(false)
  const {pathname} = useLocation();
  console.log(authenticate)
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const auth = (e:React.FormEvent) => {
    e.preventDefault();
    //dispatch(authenticate(true))
    ////dispatch(login())
    //navigate("/home");

  }
  //const register = () => {
  //  axios.post("/api/auth/register", {
  //    email:"test1231@gmail.com",
  //    password:"daaEbatEgoRot1"
  //  })
  //  .then(response => console.log(response))
  //}
  //const login = () => {
  //  axios.post("/api/auth/login", {
  //    email: "test1231@gmail.com",
  //    password:"daaEbatEgoRot1"
  //  })
  //  .then(response => {
  //    console.log(response)
  //   axios.get("/api/products/", {
  //    headers: {
  //      "ngrok-skip-browser-warning": "69425",
  //      "Authorization": `Bearer ${response.data.token}` 
  //    }
//
  //   }).then(response => console.log(response))})
  //  
  //}
    return (
        <main>
             <div className={classes.first}>
        <div>Make your</div>
        <div>Lif<svg viewBox="645.806 158.706 535.607 93.184" width="535.607" height="93.184">
  <path d="M 645.806 158.706 L 1179.621 158.706 L 1179.621 173.042 L 660.782 173.042 L 660.782 197.874 L 1174.501 197.874 L 1174.501 212.338 L 660.782 212.338 L 660.782 237.554 L 1181.413 237.554 L 1181.413 251.89 L 645.806 251.89 L 645.806 158.706 Z" fill="white"></path>
</svg></div>
        <div>brighter<svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Star 6" d="M47 0L47.96 40.0157L59.6805 1.74289L49.8087 40.5337L71.4204 6.84229L51.4492 41.5312L81.3493 14.92L52.7596 42.9344L88.7306 25.3769L53.6429 44.6391L93.017 37.4376L54.0336 46.5189L93.8904 50.2074L53.9025 48.4344L91.2863 62.7393L53.2596 50.2435L85.3976 74.104L52.1524 51.812L76.6611 83.4584L50.6631 53.0237L65.7249 90.1089L48.9021 53.7886L53.3998 93.5622L47 54.05L40.6002 93.5622L45.0979 53.7886L28.2751 90.1089L43.3369 53.0237L17.3389 83.4584L41.8476 51.812L8.60241 74.104L40.7404 50.2435L2.71374 62.7393L40.0975 48.4344L0.10957 50.2074L39.9664 46.5189L0.983047 37.4376L40.3571 44.6391L5.26939 25.3769L41.2404 42.9344L12.6507 14.92L42.5508 41.5312L22.5796 6.84229L44.1913 40.5337L34.3195 1.74289L46.04 40.0157L47 0Z" fill="white"/>
</svg>
</div>
      </div>
      <div className={classes.second}>
        <form onSubmit={auth}>
        <h3>{pathname === "/register" ? "Регистрация" : "Войти"}</h3>
        
        {pathname === "/register"
        ?
        <>
        <input className={classes.input} placeholder='Имя'/>
          <input className={classes.input}  placeholder='Фамилия'/>
          <div className={classes.twoInputs}>
            <input className={classes.input}  placeholder='дд.мм.гггг'/>
            <input className={classes.input}  placeholder="+7 XXX XXX XX XX"/>
          </div>
          <input className={classes.input}  type='email' placeholder='E-mail'/>
          <div className={classes.password}>
          <input className={classes.input}  placeholder='Password' type={isVisible ? 'text' : 'password'}></input>
          <img onClick={() => setVisible(prev => !prev)} src={ isVisible ? "visible.svg" : "notVisible.svg"}/>
          </div>
          <div className={classes.socials}>
            <h4>Войти с помощью</h4>
            <div className={classes.icons}>
              <img src="google.png"/>
              <img src="vk.png"/>
            </div>
          </div>
          <button>Зарегистрироваться</button>
          <p>Уже зарегистрированы? <Link to="/login"> Войти</Link></p>
        </>
        : 
        <>
        <input className={classes.input}  type='email' placeholder='E-mail'/>
          <div className={classes.password}>
          <input className={classes.input}  placeholder='Password' type={isVisible ? 'text' : 'password'}></input>
          <img onClick={() => setVisible(prev => !prev)} src={ isVisible ? "visible.svg" : "notVisible.svg"}/>
          </div>
          <div className={classes.socials}>
            <h4>Войти с помощью</h4>
            <div className={classes.icons}>
              <img src="google.png"/>
              <img src="vk.png"/>
            </div>
          </div>
          <button>Войти</button>
          <p>Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
        </>}
        
        </form>

      </div>
        </main>
);
};

export default Auth