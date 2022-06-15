import React from "react";


const InfoBox = (props) => {
    console.log(props);


    return (
        <div className = "infobox">
            <div className = "title" ><h4>Коренные малочисленные <br/> народы  Севера, Сибири <br/> и Дальнего Востока России</h4><br /></div>
            <p className = "textnation">{props.info ?<h4> {props.info.Nation}</h4>: "Информация о народе – Выберите область"}</p>  
            <div className = "text">{props.info ? <p><h6>Население: </h6> {props.info.Population}  человек</p>: null}</div> 
            <div className = "text"> {props.info ? <p><h6>Язык: </h6> {props.info.Language} </p>: null}</div> 
            <div className = "text"> {props.info ? <p><h6>Языковая группа: </h6> {props.info.LangFamily} </p>: null}</div> 
            <div className = "text"> {props.info ? <p><h6>Регионы проживания: </h6> {props.info.Oblast} </p>: null}</div> 
            <button>Узнать</button>
            <button>Играть</button>
        </div>
    );
  };
  

export default InfoBox;