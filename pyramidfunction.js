function returnPyramid(height){
  let resultArr = [];
  let block = "";
    for(let i = 0; i < height; i++) {
      resultArr.push(block += "#");
    }
     return resultArr;
}

console.log(returnPyramid(2)); //=> ['#','##']
console.log(returnPyramid(4)); //=> ['#','##','###','####']
console.log(returnPyramid(6)); //=> ['#','##','###','####','#####','######']