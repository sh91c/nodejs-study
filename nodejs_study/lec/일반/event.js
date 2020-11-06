const EventEmitter = require('events');
// 커스텀 이벤트 예제
const myEvent = new EventEmitter();

myEvent.addListener('event1', () => console.log('Event 1')); // event1에 console.log 콜백 등록
myEvent.on('event2', () => console.log('Event 2'));
myEvent.on('event2', () => console.log('Event 2++'));
myEvent.once('event3', () => console.log('Event 3 Once'));

// emit 호출
myEvent.emit('event1');
myEvent.emit('event2');
myEvent.emit('event3'); // 이벤트 호출
myEvent.emit('event3'); // 한번만 실행하기 때문에 더 이상 실행 되지 않음

myEvent.on('event4', () => console.log('Event 4'));
myEvent.removeAllListeners('event4'); // 모든 리스너를 지울 때 (복수형)
myEvent.emit('event4'); // 실행 안 됨

const listener = () => console.log('Event 5');
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener); // 하나만 지울 때 (단수형)
myEvent.emit('event5'); // 실행 안 됨

console.log(myEvent.listenerCount('event2'));