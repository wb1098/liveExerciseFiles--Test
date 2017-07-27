//script testing file
// 2017 - Heckle Design


/*
Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
*/

function assertStringEqual(actual, expected, testName) {
  if(actual.length > 0) {
    for(var i=0; i<actual.length; i++){
      if(actual[i] === expected[i]) {
        console.log('Test [ ' + testName + '] passed');
        return;

      }
    }
      }
   console.log('Failed [' + testName + '] expected ' + expected + ' and got ' + actual);
   return(false);
}



function flipPairs(sentence) {
//convert the string to an array - split()
var workArr = [];
workArr = sentence.split('');
temp = null;
var j = 0;
var i =0;
var result = '';

// read back of array
for (var i=0; i< workArr.length -1; i += 2) {

  result += workArr[i+1] + workArr[i];
  //console.log(result);

}
return(result);
/*for (var i= workArr.length -2; i>0; i -= 2) {

  result = workArr[i] + workArr[i-1];
  console.log(result);

}
*/
// change every pair of characters position
//return string
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
assertStringEqual(output,'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn', 'Test flipPairs Function - testA');
