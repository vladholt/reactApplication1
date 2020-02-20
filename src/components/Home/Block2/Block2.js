import s from "./Block2.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

let Block2 = (props) => {
    return(
        <div className={s.item}>
            <b>{props.h2}</b> <br/>
            <p>{props.h1}</p> <br/>
            <span className={s.span}><strong><NavLink className={s.link} to='/'>{props.link}</NavLink></strong>{props.span}</span>
            <br/>
            <a href="/about"> <button className={s.btn}>about us</button></a>
        </div>
    );
};
export default Block2;