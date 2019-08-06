function populateColorMap(map) {
  var numItems = 0;
  for(i in map) 
    numItems+=1;

  var index = 0;
  for(i in map) {
    map[i] = (360/numItems) * index;
    index += 1;
  }
}

function shuffle(o){
  var j, x, i = o.length;
  while(i) {
    // Random inded between [0, i)
    j = Math.floor(Math.random() * i);
    // Get element at the end of the list
    // and subtract 1 from the number of indexes left to choose from
    x = o[--i];
    // put the random element at the end of the list
    o[i] = o[j];
    // put the element that was at the end of the list where the random element was
    o[j] = x;
  }
  return o;
}
