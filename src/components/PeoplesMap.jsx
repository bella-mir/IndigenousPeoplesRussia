import React from "react";
import { useState, useEffect } from "react";
import L from "leaflet";
import {
  MapContainer,
  GeoJSON,
  ScaleControl,
  ZoomControl,
} from "react-leaflet";
import InfoBox from "./InfoBox";
import "leaflet/dist/leaflet.css";
import "./PeoplesMap.css";
import "proj4leaflet";
import "proj4";
import * as myConstClass from "./constants.js";
import world from "../data/world.json";
import russia from "../data/russia.json";
import lakes from "../data/lakes.json";
import PeoplesMapQuiz from "./PeoplesMapQuiz";
import PeoplesMapInfo from "./PeoplesMapInfo";
import PeoplesMapStart from "./PeoplesMapStart";
import { selectedNations } from "./quizConstants";

const PeoplesMap = (props) => {
  const [nationsData, setNationsData] = useState(selectedNations);
  let [info, SetInfo] = useState(null);
  let [answer, SetAnswer] = useState(null);

  //create function that shuffles array
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  useEffect(() => {
    if (props.quizMode === false) {
      const newNations = shuffleArray(selectedNations).slice(0, 10);
      setNationsData(newNations);
    }
  }, [props.quizMode]);

  const crs = new L.Proj.CRS(
    "EPSG:3576",
    "+proj=laea +lat_0=90 +lon_0=90 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
    {
      resolutions: [
        32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4,
        2, 1, 0.5,
      ],
    }
  );

  return (
    <>
      <InfoBox
        info={info}
        answer={answer}
        isQuiz={props.quizMode}
        islearn={props.learnMode}
        isStart={props.startMode}
        handleStartQuizClick={props.handleStartQuizClick}
        handleLearnClick={props.handleLearnClick}
        handleStartModeClick={props.handleStartModeClick}
        nationsData={nationsData}
      />

      <MapContainer
        style={{ height: "100vh" }}
        zoomControl={false}
        zoom={2}
        center={[65, 130]}
        minZoom={2}
        maxZoom={5}
        crs={crs}
        maxBounds={[
          [20, 75],
          [870, 2000],
        ]}
      >
        <GeoJSON data={world} style={myConstClass.basemapStyle2} />
        <GeoJSON data={russia} style={myConstClass.basemapStyle} />
        <GeoJSON data={lakes} style={myConstClass.waterStyle} />

        {props.quizMode ? (
          <PeoplesMapQuiz
            handleSetAnswer={SetAnswer}
            nationsData={nationsData}
          />
        ) : null}
        {props.learnMode ? <PeoplesMapInfo handleSetInfo={SetInfo} /> : null}
        {!props.quizMode & !props.learnMode ? <PeoplesMapStart /> : null}

        <ScaleControl position="bottomleft" />
        <ZoomControl position="bottomleft" />
      </MapContainer>
    </>
  );
};

export default PeoplesMap;
