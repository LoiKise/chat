import React, { useEffect } from 'react';
// import { NavItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment } from '../../../features/counter/counterSlice';


export default function Index(props) {
  // const counter = useSelector(state => state.counter)
  // theme
  // const dispatch = useDispatch();
  // useEffect(() => {
  //    console.log({counter});
  // }, [counter])
  // const logger = () => {
  //     dispatch(ChangeTheme('active')) action.payload === 'active' ?  state.theme = 
  // }
  return (
    <div className="header">
      <nav className="header__nav">
        <Link to="/">
          <img
            src="./assets/img/logo/dark_logo.png"
            alt="this is logo"
            className="header__logo"
          />
        </Link>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link className="header__nav-link" href="index.html">TRANG CHỦ</Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to="/">GIỚI THIỆU</Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to="/">DỊCH VỤ</Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to="/">TRA CỨU</Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" href="tuyendung.html">TUYỂN DỤNG</Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to="/">LIÊN HỆ</Link>
          </li>
        </ul>

        <div className="header__authenWrapper">
          <Link href="login.html" className="header__authen--login">Đăng nhập</Link>
          <Link href="signup.html" className="header__authen--signup">Đăng ký</Link>
        </div>
      </nav>
    </div>
  )
}
