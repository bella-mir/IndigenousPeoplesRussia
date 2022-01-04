import React from "react";
import Loading from "./Loading";
import PeoplesMap from "./PeoplesMap";
import "./Peoples.css"
import countries from "../data/countries.json";

const Peoples = () => {
  
  
  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div className="container">

          <div className="mainmap"> 
            <PeoplesMap/>
          </div>
          
        </div>
      )}
      
    </div>
  );
};

export default Peoples;
