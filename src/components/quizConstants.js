import nationsData from "../data/nations.json";

 //выбираю названия регионов из файла
 const nations = [];
 for (var i = 0; i < nationsData.features.length; i++) {
   nations.push(nationsData.features[i].properties.Nation);
 }

 function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) {
     var j = Math.floor(Math.random() * (i + 1));
     var temp = array[i];
     array[i] = array[j];
     array[j] = temp;
   }
   return array;
 }

export const selectedNations = shuffleArray(nations).slice(0, 10);