// 문자를 버퍼로 바꿨을 때..
const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from(): ', buffer);
console.log('length: ', buffer.length);
console.log('toString(): ', buffer.toString());

// 버퍼를 작게 모아서 합치기
const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat(): ', buffer2.toString());

// 아무것도 없는 10바이트 버퍼 만들기
const buffer3 = Buffer.alloc(10);
console.log('alloc(): ', buffer3);

// Buffer의 메소드
// from(문자열) : 문자열 -> 버퍼로 바꿈. length 속성은 버퍼의 크기를 알려줌. 바이트 단위.
// toString(버퍼) : 버퍼 -> 문자열로 바꿈, 이때 base64나 hex를 인자로 넣으면 해당 인코딩으로 변환 가능
// concat(배열) : 배열 안에 든 버퍼를 하나로 합침
// alloc(바이트) : 빈 버퍼 생성. 바이트를 인자로 지정하면 해당 크기의 버퍼가 생성.