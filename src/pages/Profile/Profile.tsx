import React, {FC, useEffect} from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import classes from "./profile.module.scss";
import "../../../public/trash.svg";
import "../../../public/photo.svg";
const Profile: FC = () => {
    const navigate = useNavigate();
    const pathname = useLocation()["pathname"].split("/")[2];
    useEffect(() => {
        navigate('account')
    }, []);
    return (
        <>
        <div className={classes.profile}>
        <div className={classes.text}>you're</div>
        <div className={classes.profilePicture}>
          <div className={classes.controls}>
            <div className={classes.btns}>
              <img src='/photo.svg'/>
              <img src="/trash.svg"/>
            </div>
          </div>
        </div>
        <div className={classes.text}>bright</div>
        </div>
        <div className={classes.content}>
        <nav className={classes.menu}>
          <Link className={pathname === "account" ? `${classes.element} ${classes.selected}` : classes.element} to="account">Личные данные</Link>
          <Link className={pathname === "cart" ? `${classes.element} ${classes.selected}` : classes.element} to="cart">Моя корзина</Link>
          <Link className={pathname === "orders" ? `${classes.element} ${classes.selected}` : classes.element} to="orders">Мои заказы</Link>
          <Link className={pathname === "reviews" ? `${classes.element} ${classes.selected}` : classes.element} to="reviews">Отзывы</Link>
          <Link className={pathname === "favorite" ? `${classes.element} ${classes.selected}` : classes.element} to="favorite">Избранное</Link>
          <a className={classes.element}>Выйти</a>
    
        </nav>
        <Outlet/> 
        </div>
        
        </>
);
};

export default Profile