import { message } from 'antd';
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import { setLogout } from "../../state/authSlice";
import Styles from './Navbar.module.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [hide, sethide] = useState(false);
    const [Active1, setActive1] = useState(true);
    const [Active2, setActive2] = useState(false);
    const [Active3, setActive3] = useState(false);
    const [formCompleted, setFormCompleted] = useState(false);

    useEffect(() => {
        const formStatus = localStorage.getItem('formCompleted');
        setFormCompleted(formStatus === 'true');
    }, []);

    const makeActiveHome = () => {
        setActive1(true);
        setActive2(false);
        setActive3(false);
    }

    const makeActiveLogin = () => {
        setActive1(false);
        setActive2(true);
        setActive3(false);
    }

    const makeActiveSignUp = () => {
        setActive1(false);
        setActive2(false);
        setActive3(true);
    }

    const showbar = () => {
        sethide(!hide);
    }

    const dispatch = useDispatch();

    const logoutfunc = () => {
        message.success("Logout Successfully");
        makeActiveHome();
        localStorage.clear();
        dispatch(setLogout());
        navigate('/');
    }

    return (
        <div className={Styles.main}>
            <div className={Styles.first}>
                <div className={Styles.first_inside}>
                    <div className={Styles.search_text}>Search</div>
                    <input className={Styles.search}></input>
                    <div className={Styles.search_icon}><CiSearch /></div>
                </div>
            </div>
            <div className={Styles.second}>
                <Link to={'/'}>
                    <div onClick={makeActiveHome} className={Styles.secondin}>
                        <img className={Styles.logo} src={Logo} alt="LOGO"></img>
                        <div className={Styles.name}> React University London</div>
                    </div>
                </Link>
                {!hide ?
                    <div className={Styles.burger}><RxHamburgerMenu onClick={showbar} /></div>
                    :
                    <div className={Styles.burger}><RxCross1 onClick={showbar} /></div>
                }
            </div>
            <div className={`${Styles.third}  ${hide ? Styles.special : ''}`}>
                <p className={`${Styles.nav_item} ${Active1 && Styles.active}`}> <Link to={"/"} onClick={makeActiveHome}>Home</Link></p>
                {!localStorage.getItem("token") && <p className={`${Styles.nav_item} ${Active2 && Styles.active}`}> <Link to={"/login"} onClick={makeActiveLogin}>Login</Link></p>}
                {!localStorage.getItem("token") && <p className={`${Styles.nav_item} ${Active3 && Styles.active}`}><Link to={"/register"} onClick={makeActiveSignUp}>SignUp</Link></p>}
                {localStorage.getItem("token") && <p className={`${Styles.nav_item} ${Active3 && Styles.active}`}><Link to={"/details"} onClick={makeActiveSignUp}>Details</Link></p>}
                {localStorage.getItem("token") && formCompleted && <p className={Styles.nav_item}><Link to={"/allocated_branch"}>Branch Allocated</Link></p>}
                {localStorage.getItem("token") && <p onClick={logoutfunc} className={Styles.nav_item}>LogOut </p>}
            </div>
        </div>
    );
}

export default Navbar;
