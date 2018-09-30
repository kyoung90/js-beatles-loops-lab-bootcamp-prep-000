// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray){
  var emptyArr = [];
  for(var i = 0; i < musiciansArray.length; i++){
    emptyArr.push(musiciansArray[i] + " plays " + instrumentsArray[i])
  }
  
  return emptyArr;
}

function johnLennonFacts(factsArray){
  var i = 0;
  while(i < factsArray.length){
    factsArray[i] = factsArray[i] + "!!!"
    i++;
  }
  
  return factsArray;
}