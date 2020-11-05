const { odd, even } = require('./var');
// import { odd, even } from './var'; // ES 모듈 임포트 방식

function checkOddOrEven(number){
  if(number % 2){
    return odd;
  } else {
    return even;
  }
}

module.exports = checkOddOrEven;
// export default checkOddOrEven; // ES 모듈 익스포트 방식 ( 노드에서 정식 지원은 안됨 )