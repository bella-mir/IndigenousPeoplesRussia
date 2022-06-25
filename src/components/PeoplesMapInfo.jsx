import React from "react";
import { useRef } from "react";
import L from "leaflet";
import { GeoJSON } from "react-leaflet";
import * as myConstClass from "./constants.js";
import nations from "../data/nations.json";

export default function PeoplesMapInfo(props) {
  let selected = null;

  const HighlightFeature = (layer) => {
    if (selected == null || selected._leaflet_id !== layer._leaflet_id) {
      layer.setStyle({
        /*weight: 3,
            color: 'white',*/
        weight: 1.5,
        dashArray: "",
        fillOpacity: 0.9,
      });
      /*layer.bindTooltip(feature.properties.Nation, {permanent: true, direction: 'center', position:'auto'}).openTooltip(); */

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
  };

  const geoJsonRef = useRef();

  const ResetHighlight = (layer) => {
    if (selected == null || selected._leaflet_id !== layer._leaflet_id) {
      geoJsonRef.current.resetStyle(layer);
    }
  };

  const Select = (layer) => {
    if (selected !== null) {
      var previous = selected;
    }
    props.handleSetInfo(layer.feature.properties);

    layer.setStyle({
      weight: 3,
      color: "white",
      fillOpacity: 1,
    });

    selected = layer;
    if (previous) {
      ResetHighlight(previous);
    }
  };

  const onEachFeatureF = (feature, layer) => {
    layer.on({
      click: function (e) {
        Select(e.target);
      },
      mouseover: function (e) {
        HighlightFeature(e.target);
      },
      mouseout: function (e) {
        ResetHighlight(e.target);
      },
    });
    layer
      .bindTooltip(feature.properties.Nation, {
        permanent: true,
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
