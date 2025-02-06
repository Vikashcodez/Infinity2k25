import react , { useState } from "react";
import slides from "../data/slides.json"
import "./Events.css";
import { BsArrowLeftCircleFill ,BsArrowRightCircleFill } from 'react-icons/bs';

const Events = () => {
    const [present,setPresent]=useState(0);


    const data=slides.slides;
    return <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={()=>{
            setPresent((present+data.length-1)%data.length);
        }}/>
       {data.map((item,index)=> (
            <img 
            src={item}
            key={index}
            width='600vw'
            height='5%'
            className={(index===present)?"slide":"slide-i"}/>
        ))} 
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={()=>{
            setPresent((present+1)%data.length);
        }}/>
        <span className="indicators">
            {data.map((_,index)=>(
                 <button  className={(index===present)?"indicator":"indicator-i"} onClick={()=>{
                    setPresent(index);
                 }} key={index}></button>
            ))}
        </span>
    </div>
}

export default Events;