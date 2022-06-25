import React from "react";
import { useRef } from "react";
import L from "leaflet";
import { GeoJSON } from "react-leaflet";
import * as myConstClass from "./constants.js";
import nations from "../data/nations.json";

export default function PeoplesMapQuiz(props) {
  let selected = null;
  let counter = -1;

  const HighlightFeature = (layer) => {
    if (selected == null || selected._leaflet_id !== layer._leaflet_id) {
      layer.setStyle({
        weight: 1.5,
        dashArray: "",
        fillOpacity: 1,
      });
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
  };

  const geoJsonRefQuiz = useRef();

  const ResetHighlight = (layer) => {
    if (selected == null || selected._leaflet_id !== layer._leaflet_id) {
      geoJsonRefQuiz.current.resetStyle(layer);
    }
  };

  const Select = (layer) => {
    if (selected !== null) {
      var previous = selected;
    }
    console.log(props.nationsData[counter]);
    if (layer.feature.properties.Nation === props.nationsData[counter]) {
      layer.setStyle({
        weight: 3,
        color: "#A4D6A5",
        fillOpacity: 0.5,
        fillColor: "#A4D6A5",
      });
    } else {
      layer.setStyle({
        weight: 1,
        color: "white",
        fillColor: "#F27272",
        fillOpacity: 0.5,
      });
    }

    selected = layer;
    if (previous) {
      ResetHighlight(previous);
      selected.closeTooltip();
    }
  };

  const onEachFeatureFQuiz = (feature, layer) => {
    layer.on({
      click: function (e) {
        counter = counter + 1;
        console.log(counter);
        Select(e.target);
        props.handleSetAnswer(e.target.feature.properties.Nation);
        e.target
          .bindTooltip(feature.properties.Nation, {
            direction: "center",
            position: "auto",
          })
          .openTooltip();
      },
      mouseover: function (e) {
        HighlightFeature(e.target);
      },
      mouseout: function (e) {
        ResetHighlight(e.target);
      },
    });
  };
  return (
    <GeoJSON
      data={nations}
      style={myConstClass.quizStyle}
      onEachFeature={onEachFeatureFQuiz}
      ref={geoJsonRefQuiz}
    />
  );
}
