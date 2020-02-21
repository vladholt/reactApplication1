

import classes from './DevIos.module.css'
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInUp } from 'react-animations';
import { bounceInDown } from 'react-animations';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {NavLink} from "react-router-dom";



const BuonceApp = styled.div`animation: 3s ${keyframes`${bounceInUp } `}`;
const BuonceDown = styled.div`animation: 3s ${keyframes`${bounceInDown} `}`;


let DevIos=(props) =>{


   //let text = React.createRef();

    let block1 = props.arrServise.arrServiseBlock1.map(e =>

        <div className={classes.blockSmall}>
            <div className={classes.smallFlex}>
                <div className={classes.item_text1}>
                    <span className={classes.h1}>ios app</span><br/>
                    <span className={classes.h1Small}>development</span><br/>
                    <span  className={classes.textInfo}><a href="#">SparkleAppz </a>  have experience of more than 10 years in making world’s leading brands go mobile by developing inspiring apps in Apple platform. Add boost to your business needs by using our expertise in <a
                        href="#"> iOS app development</a>  to build beautiful, <a href="#"> engaging</a>  and <a href="#"> seamless </a> app.</span>
                    <br/>
                    <NavLink to="/portfolio"> <button className={classes.btn}>Our Portfolio <b> &#8594;</b></button></NavLink>
                </div>
                <div className={classes.item_img1}>
                    <img src={e.img} alt=""/>
                </div>
            </div>
        </div>

    );

    let block2 = props.arrServise.arrServiseBlock2.map(e =>

        <div   className={classes.blockSmall}>
            <div   className={classes.block2Items}>
                <h1 className={classes.h1Block2}> {e.title}</h1>
                <span className={classes.spanBlock2}> {e.text}</span>
             </div>

            <ScrollAnimation animateIn={BuonceApp}  animateOut={BuonceDown}>
            <div  className={classes.btnBlock2Div}> <a href="/portfolio"> <button  className={classes.btnBlock2}>see our work </button></a> </div>
            </ScrollAnimation>

        </div>
    );
    let block3 = props.arrServise.arrServiseBlock3.map(e=>
            <div className={classes.blockSmall}>

                <div className={classes.block2Items}>
                <h1 className={classes.h1Block3}>build an app for ios devices</h1>
                <span className={classes.textBlock3}>Our talented  <a href="#">iOS app developers</a>  provide app development services by building <a
                    href="#"> applications</a>  that would work equally well across all <a href="#"> Apple devices.</a> Our team believe in helping you in every step from solution <a
                    href="#">design </a>  to delivery of the product. We also offer ongoing maintenance to keeps solutions healthy to deal with changing <a
                    href="#">technical </a>  and <a href="#">business </a> environment. </span>
                <div className={classes.figureBlock3}>
                    <figure>
                        <img src={e.img1} alt="foto"/>
                        <figcaption>
                                <h2 className={classes.figcaptionH1}>life lister</h2>
                                <span className={classes.figcaptionSpan}>Plan your holidays with life listr and never miss anything. </span>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={e.img2} alt="foto"/>
                        <figcaption>
                            <h2 className={classes.figcaptionH1}>go teach</h2>
                            <span className={classes.figcaptionSpan}>Teacher plan book, lesson plans and more. </span>
                        </figcaption>
                    </figure>
                </div>

                </div>
                <ScrollAnimation animateIn={BuonceApp}  animateOut={BuonceDown}>
                <div  className={classes.btnFigDiv}> <a href="/portfolio"> <button className={classes.btnFigure}>show more project </button></a> </div>
                </ScrollAnimation>
            </div>

    );
    let block4 = props.arrServise.arrServiseBlock4.map(e=>

        <div className={classes.blockShadow}>

            <div className={classes.shadowImg}> <img src={e.img} alt={e.title}/></div>

            <div className={classes.shadowItem}>
                <span className={classes.itemTitle}>{e.title}</span> <br/>
                <span className={classes.itemText}>{e.text}</span>
            </div>

        </div>


    );






    return(

        <div className={classes.blockService}>

            <div className={classes.blockWhite}> {block1}</div>
            <div className={classes.blockBlue}>{block2}</div>
            <div className={classes.blockWhite}> {block3} </div>
            <div className={classes.blockGrey}>
                    <div className={classes.blockSmall}>
                        <h2 className={classes.h2Follow}>process we follow</h2>
                        <div className={classes.blockFlexServ}>
                            {block4}
                        </div>
                    </div>
            </div>
            <div className={classes.blockWhite}>
                <div className={classes.blockSmall}>
                    <h1 className={classes.detailsH1}> frequently asked questions</h1>
                    <div className={classes.FAQ}>
                        <details tabIndex>
                            <summary><b className={classes.summaryB}>01 </b>- What services do you provide?</summary>
                            <span className={classes.summarySpan}>Our company provides mobile application development and also web development solution and services.</span>
                        </details>
                        <details tabIndex>
                            <summary><b className={classes.summaryB}>02 </b>- What about project management?</summary>
                            <span className={classes.summarySpan}>You will be required to interact directly with the developer and manage the project of your choice and you will have Skype and email address of developer.</span>
                        </details>
                        <details tabIndex>
                            <summary><b className={classes.summaryB}>03 </b>- How much does it cost to develop an App?</summary>
                            <span className={classes.summarySpan}>The cost of the development of an app depends on the project size, to technical complexity,to your choice of development partner.</span>
                        </details>
                        <details tabIndex>
                            <summary><b className={classes.summaryB}>04 </b>- How do you plan to maintain your app after launched?</summary>
                            <span className={classes.summarySpan}>After the launching of your application to marketyour project is not entirely finished. We will still have to release updates, fix bugs and new features and improve functionality.</span>
                        </details>
                        <details tabIndex>
                            <summary><b className={classes.summaryB}>05 </b>- Which platform should we target iOS / Android or both?</summary>
                            <span className={classes.summarySpan}>We recommend to launch the product in both the platforms because now a days the growing popularity of both iOS and Android.</span>
                        </details>
                    </div>

                </div>
            </div>








        </div>

    );


};




export default DevIos;
