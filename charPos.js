
// var str = "its a great day"


// console.log(string);
var countObject = {};
function charPos(example) {
 example = example.replace(/\s/g, '').split("");
 for (var i = 0; i < example.length; i++){
   if(countObject[ example[i]]){

     countObject [ example[i]].push(i);

   }else {
     // return 2
     countObject [ example[i]] = [i];
   }
 }
}
charPos("lighthouse in the house");
console.log(countObject);
