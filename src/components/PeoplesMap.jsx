import React from 'react';
import  { useRef, useState } from 'react';
import L from 'leaflet';
import { MapContainer, GeoJSON, ScaleControl, ZoomControl } from "react-leaflet";
import InfoBox from "./InfoBox";
import "leaflet/dist/leaflet.css";
import "./PeoplesMap.css"
import "proj4leaflet";
import "proj4";
import  * as myConstClass from  "./constants.js";
import world from "../data/world.json";
import russia from "../data/russia.json";
import lakes from "../data/lakes.json";
import nations from "../data/nations.json";



const PeoplesMap = () => {

let [info, SetInfo] = useState(null);
let selected = null;


const HighlightFeature = (layer) => {
  if(selected == null || selected._leaflet_id !== layer._leaflet_id) {

    layer.setStyle({
        /*weight: 3,
        color: 'white',*/
        weight: 1.5,
        dashArray: '',
        fillOpacity: 0.9
    }
    );
    /*layer.bindTooltip(feature.properties.Nation, {permanent: true, direction: 'center', position:'auto'}).openTooltip(); */

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
}};


const geoJsonRef = useRef();

const ResetHighlight = (layer) => {
  if(selected == null || selected._leaflet_id !== layer._leaflet_id) {
    geoJsonRef.current.resetStyle(layer);
  }
};

const Select = (layer) => {
  if (selected !== null) {
    var previous = selected;
  };

  SetInfo(layer.feature.properties);
  info = layer.feature.properties;

  layer.setStyle({
    weight: 3,
    color: "white",
    fillOpacity: 1
}
);

  selected = layer;
  if (previous) {
    ResetHighlight(previous);
  }
}
  
const onEachFeatureF = (feature, layer) => {
  layer.on({
    click: function (e) {
      Select(e.target); 
      // console.log(info);
    },  
    mouseover: function (e) {
      HighlightFeature(e.target);
    },
    mouseout: function (e) {
      ResetHighlight(e.target);
    },
      
  });
  //layer.bindPopup("ID: " + feature.properties.fid+ "<br>Народ: " + feature.properties.Nation + "<br>Описание: " + feature.properties.Nation);
  layer.bindTooltip(feature.properties.Nation, {permanent: true, direction: 'center', position:'auto'}).openTooltip();
};


  const crs = new L.Proj.CRS("EPSG:3576","+proj=laea +lat_0=90 +lon_0=90 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
 {resolutions: [ 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5]
  //origin: [ -180, -90 ]         
}
);

  return (
    <>
      <InfoBox info={info}/>
      <MapContainer style={{ height: "100vh" }} zoomControl={false} zoom={2} center={[65, 130]} minZoom={2} maxZoom={5} crs={crs} maxBounds={[[20, 75], [870, 2000]] } >

        <GeoJSON
          data = {world}
          style={myConstClass.basemapStyle2}
        />

        <GeoJSON
          data = {russia}
          style={myConstClass.basemapStyle}
        />

        <GeoJSON
          data = {lakes}
          style={ myConstClass.waterStyle}
        />

        <GeoJSON
          data={nations}
          style={myConstClass.subteStyle}
          onEachFeature={onEachFeatureF}
          ref={geoJsonRef}
        />

        <ScaleControl position="bottomleft" />
        <ZoomControl position="bottomleft" />

      </MapContainer>

    </>
  );
};

export default PeoplesMap;
