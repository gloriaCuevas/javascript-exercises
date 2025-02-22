const sumAll = function(smallNum, largNum) {
    if (!Number.isInteger(smallNum) || !Number.isInteger(largNum)) return "ERROR";
    if (smallNum < 0 || largNum < 0) return "ERROR";
    if (smallNum > largNum) {
      const temp = smallNum;
      smallNum = largNum;
      largNum = temp;
    }
let sum = 0;
for(let i = smallNum; i = largNum; i++){
sum += i;}

return sum;

};

// Do not edit below this line
module.exports = sumAll;
