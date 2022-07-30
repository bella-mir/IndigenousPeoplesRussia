import React from "react";
import { useRef } from "react";
import { GeoJSON } from "react-leaflet";
import nations from "../data/nations.json";

export default function PeoplesMapResult(props) {
  
const geoJsonRef = useRef();

const onEachFeatureF = (feature, layer) => {
  layer
      .bindTooltip(feature.properties.Nation, {
        direction: "center",
        position: "auto",
      })
      .openTooltip();
    
    if (props.rightAnswers.includes(layer.feature.properties.Nation)) {
        layer.setStyle({
          fillColor: "#A4D6A5",
          color: "white",
          weight: 0.5,
          dashArray: "",
          fillOpacity: 0.6,
        });
      } 
      else if (props.wrongAnswers.includes(layer.feature.properties.Nation)) {
        layer.setStyle({
          fillColor: "#F27272",
          color: "white",
          weight: 0.5,
          dashArray: "",
          fillOpacity: 0.6,
        });
      }
      
      else {
        layer.setStyle({
          color: "white",
          weight: 0.5,
          opacity: 1,
          fillColor: "#91a3bf",
          fillOpacity: 0.6,
        });
      }
  };

  return (
    <GeoJSON data={nations} onEachFeature={onEachFeatureF} ref={geoJsonRef} />
  );
}
