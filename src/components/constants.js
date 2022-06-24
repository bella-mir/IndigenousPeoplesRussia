export const basemapStyle = {
    color: "#E3DFDA",
    weight: 2,
    opacity: 1, 
    fillColor: "#D9D5D2", 
    fillOpacity: 1
  };

  export const basemapStyle2 = {
    color: "#D3D3D3",
      weight: 1.2,
      Opacity: 1,
      fillColor: "#E6E2DF",
      fillOpacity: 1
  };

  export const waterStyle = {
    color: "#9FBFC6",
    weight: 0.8,
    opacity: 1, 
    fillColor: "#9FBFC6", 
    fillOpacity: 1
  };

  export const quizStyle = {
    color: "#9FBFC6",
    weight: 0.8,
    opacity: 1, 
    fillColor: "#0000FF", 
    fillOpacity: 1
  };

  export const subteStyle = (nations) => {
    return {
      "fillColor": nations.properties.color,
      "weight": 1,
      "fillOpacity": 0.6,
      "color": "white"
    };
  };

  
  