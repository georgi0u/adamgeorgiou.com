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
