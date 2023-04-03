//! 나머지 매개변수라는 이름으로 부르는 ...arguments
function tooManyParameters(...args){
  return args;
}
console.log(tooManyParameters(1,2,3,4,5,6,7,8,9,10));
