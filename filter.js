

var zeroFront = function(ary){
  var newAry = [];
  ary.forEach(function(elem){
    if (elem === 0){
      newAry.unshift(elem);
    }
    else if (elem !== 0){
      newAry.push(elem);
    }
  });
  return newAry;
}

console.log(zeroFront([1, 2, 3, 4, 5, 0, 0,]));
console.log(zeroFront([1, 0, 2, 0, 3, 0, 4, 0, 5]));
