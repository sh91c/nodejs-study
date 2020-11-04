'use strict';

// async & await : 깔끔하게 promise를 사용할 수 있음

// 1. async
async function fetchUser(){ // async 키워드를 붙였더니 자동으로 promise로 바뀜
    // do network request in 10 secs...
    return 'sh';
}

const user = fetchUser();
user.then(console.log)
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
  await delay(1000);
  return '🍎';
}

async function getBanana(){
  await delay(1000);
  return '🍌';
}

// async function pickFruits(){
//   const apple = await getApple(); // 사과 받고(딜레이 1초)
//   const banana = await getBanana(); // 바나나를 받을때까지(딜레이 1초) 기다려서
//   return `${apple} + ${banana}`; // 함께 출력(총 딜레이 2초 후 결과나오고 리턴됨 : 병렬처리가 안됐음)
// }

// async 병렬 처리
async function pickFruits(){
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
} 
pickFruits().then(console.log);
// 코드가 지저분하기 때문에 Promise API들을 사용하보자

// 3. useful Promise APIs : Promise.all()
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()]) // Promise.all()은 [배열]형태로 인자를 받아
  .then(fruits => fruits.join(' + ')); // 병렬처리가 다 끝난 후 value들을 join() : string으로 구분자와 함께 변환했음
}
pickAllFruits().then(console.log); // pickAllFruits()가 끝났다면 console.log(value) 출력

// 3-1. Promise.race() 인자로 받은 것들 중 가장 먼저 결과가 나오는 것 1개를 리턴해준다.
function pickOnlyOne(){
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);