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

  ////

  export const subteStyle = (nations) => {

    var colorToUse;
    var Nation_n = nations.properties.Nation;
              
    if (Nation_n === "Эскимосы") colorToUse = "#6E4285";
    else if (Nation_n === "Чукчи") colorToUse = "#959C83";
    else if (Nation_n === "Эвенки") colorToUse = "#734061";
    else if (Nation_n === "Эвены") colorToUse = "#6C898C";
    else if (Nation_n === "Нганасаны") colorToUse = "#95C7B5";
    else if (Nation_n === "Ханты") colorToUse = "#C7A78B";
    else if (Nation_n === "Алеуты") colorToUse = "#A5D6A5";
    else if (Nation_n === "Долганы") colorToUse = "#367478";
    else if (Nation_n === "Ительмены") colorToUse = "#FAB36A";
    else if (Nation_n === "Кеты") colorToUse = "#F36E6E";
    else if (Nation_n === "Коряки") colorToUse = "#B56093";
    else if (Nation_n === "Кумандинцы") colorToUse = "#8C4256";
    else if (Nation_n === "Манси") colorToUse = "#8196C7";
    else if (Nation_n === "Нанайцы") colorToUse = "GoldenRod"; 
    else if (Nation_n === "Негидальцы") colorToUse = "#A0E8C5";
    else if (Nation_n === "Ненцы") colorToUse = "#74201F";
    else if (Nation_n === "Нивхи") colorToUse = "#804E52";
    else if (Nation_n === "Орочи") colorToUse = "#6B2D3E";
    else if (Nation_n === "Саамы") colorToUse = "#A62D37";
    else if (Nation_n === "Селькупы") colorToUse = "lemonchiffon";
    else if (Nation_n === "Телеуты") colorToUse = "red";
    else if (Nation_n === "Тофалары") colorToUse = "darkgreen";
    else if (Nation_n === "Тувинцы") colorToUse = "darkgrey";
    else if (Nation_n === "Удэгейцы") colorToUse = "grey";
    else if (Nation_n === "Ульчи") colorToUse = "brown";
    else if (Nation_n === "Шорцы") colorToUse = "olive";
    else if (Nation_n === "Энцы") colorToUse = "purple";
    else if (Nation_n === "Юкагиры") colorToUse = "white";
    else colorToUse = "#000000";
              
    return {
      "fillColor": colorToUse,
      "weight": 1,
      "fillOpacity": 0.6,
      "color": "white"
    };
  };

  
  