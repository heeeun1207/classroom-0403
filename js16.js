//!  객체가 너무 큰데, 쉽게 조회할 수 있을까?
const exampleObject = {
  name : {
    korean : "희은",
    english : "heeny"
  },
  age:20,
  email: "heen1207@gmail.com",
}
//배열 메서드처럼 객체에도 .hasOwnProperty() 메서드가 있다.
// .hasOwnProperty() 메서드는 객체가 특정 속성을 가지고 있는지 확인 가능
//return 타입은 아래에서 확인 할 수 있든 boolean 타입으로 간단 확인 가능
console.log(exampleObject.hasOwnProperty('name')); //true
console.log(exampleObject.hasOwnProperty('age')); // true
console.log(exampleObject.hasOwnProperty('address')); //false
console.log(exampleObject.hasOwnProperty('email')); //true