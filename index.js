// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray){
  var emptyArr = [];
  for(var i = 0; i < musiciansArray.length; i++){
    emptyArr.push(musiciansArray[i] + " plays " + instrumentsArray[i])
  }
  
  return emptyArr;
}