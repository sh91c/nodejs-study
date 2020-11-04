"use strict";

// 1. Object 타입을 JSON으로 ( 클라이언트에 보낸 것을 -> 서버에서 사용하기 위해 )
// stringify
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

// 함수, 심볼은 JSON에 포함되지 않는다.
const rabbit = {
  name: "tori",
  color: "while",
  size: null,
  birthDate: new Date(),
  // symbol: Symbol('id'),
  jump: () => {
    console.log(`${this.name}, can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]); //원하는 Object의 속성만 JSON화 할 수도 있음
console.log(json);
// console.clear();
// 콜백함수로 좀 더 세밀하게
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "sh" : value;
});
console.log(json);

console.clear();

// 2. JSON을 Object타입으로 (서버에서 준 -> 클라이언트에서 사용)
// parse
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump("sh");
// obj.jump(); // JSON으로 변환될 때 함수는 포함되지 않아서, 다시 Object로 변환했을 때 jump()가 존재하지 않음

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
