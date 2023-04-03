//! 다시 기본기 , 그리고 함수
function basicReturnObject (parameterString, parameterNumber,parameterObject){
  // 데이터타입 확인
  if(typeof (parameterString) !== 'string' && typeof(parameterNumber)!== 'number' && typeof (parameterObject)
  !== 'object'){
    throw new Error('파라미터 타입이 잘못 입력되었습니다.');
  }
    //로컬 변수 객체 초기화
    let tempObject = {
    a : parameterString,
    b : parameterNumber,
    c : parameterObject
  };
  return tempObject;
  }
console.log(basicReturnObject('희은',1234,{name:'희은',age:20, email : 'heen1207@gamil.com'}));

// {
//   a: '희은',
//   b: 1234,
//   c: { name: '희은', age: 20, email: 'heen1207@gamil.com' }
// }