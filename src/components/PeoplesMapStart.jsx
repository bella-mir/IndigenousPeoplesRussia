import React from "react";
import { useRef } from "react";
import L from "leaflet";
import { GeoJSON } from "react-leaflet";
import * as myConstClass from "./constants.js";
import nations from "../data/nations.json";

export default function PeoplesMapStart() {
  const HighlightFeature = (layer) => {
    layer.setStyle({
      weight: 1.5,
      dashArray: "",
      fillOpacity: 0.8,
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  };

  const geoJsonRef = useRef();

  const ResetHighlight = (layer) => {
    geoJsonRef.current.resetStyle(layer);
  };

  const onEachFeatureF = (feature, layer) => {
    layer.on({
      mouseover: function (e) {
        HighlightFeature(e.target);
      },
      mouseout: function (e) {
        ResetHighlight(e.target);
      },
    });
    layer
      .bindTooltip(feature.properties.Nation, {
        direction: "center",
        position: "auto",
      })
      .openTooltip();
  };
  return (
    <GeoJSON
      data={nations}
      style={myConstClass.subteStyle}
      onEachFeature={onEachFeatureF}
      ref={geoJsonRef}
    />
  );
}
