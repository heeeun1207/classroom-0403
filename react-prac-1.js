//! 나머지 매개변수라는 이름으로 부르는 ...arguments
// ...(점이 세개) 작성법은 
// 객체 데이터를 배열로 간단하게 처리하는 상당히 편리한 작성법으로 이를 사용하면 , 함수의 매개변수를 배열로 받을 수 있다.
function restParameterExample(...properties) {
  //임의의 객체 리터럴 tempObject 선언
  let tempObject ={
    id : "",
    name : "",
    password : "",
    email: "",
  };
  //오직 배열만 사용할 수 있는 .shift() 매개변수를 사용할 수 있다.
  //.shift()는 배열의 첫번째 요소를 제거하고, 제거돤 요소를 반환한다.
  for(let key in tempObject ) {
    tempObject[key] = properties.shift();
  }
  return tempObject;
}
console.log(restParameterExample("heeny","정희은","1234","heen1207@gmail.com"));
//매개변수에 문자열을 넣었음에도 '배열'로 처리된 것을 확인 할 수 있다.
// {
//   id: 'heeny',
//   name: '정희은',
//   password: '1234',
//   email: 'heen1207@gmail.com'
// }
