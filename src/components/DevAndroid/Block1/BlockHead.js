import React from 'react';
import classes from './BlockHead.module.css'




const BlockHeader = (props) =>{

    return (
        <div className={classes.blockSmall}>
            <div className={classes.smallFlex}>
                <div className={classes.item_text1}>
                    <span className={classes.h1}>{props.h1}</span><br/>
                    <span className={classes.h1Small}>{props.h2}</span><br/>
                    <span  className={classes.textInfo}><a href="#">SparkleAppz </a> started off with android development and we feel pride to be considered as a specialist in Android App Development. Even though <a
                        href="#">Android app</a>  development is a difficult task for any software <a href="#">professional</a>  due to its availability of variant screen sizes and resolutions. But our experienced developers have a deep understanding of the user requirement and the <a
                        href="#">performance</a>  of Android applications across different devices. We use <b>professional practices</b>  and <b>proven methodologies</b>   for creating bug-free android applications.</span>
                    <br/>
                    <a href="/portfolio"> <button className={classes.btn}>Our Portfolio <b> &#8594;</b></button></a>
                </div>
                <div className={classes.item_img1}>
                    <img src={props.img} alt=""/>
                </div>
            </div>
        </div>

    );

};


export default BlockHeader;