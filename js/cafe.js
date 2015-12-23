$(function() {
  var toBeSorted = $(".tablesorter");
  if(toBeSorted.length)
    toBeSorted.tablesorter({sortList: [[0,0], [1,0]]}); 
});
