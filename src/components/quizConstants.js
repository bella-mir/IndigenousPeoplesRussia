import nationsData from "../data/nations.json";

//select nations from json file
export const selectedNations = [];
for (var i = 0; i < nationsData.features.length; i++) {
  selectedNations.push(nationsData.features[i].properties.Nation);
}

// //create function that shuffles array
// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }

// //export 10 selected peoples for the game
// export const selectedNations2 = shuffleArray(selectedNations).slice(0, 10);
