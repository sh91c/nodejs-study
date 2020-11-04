'use strict';
// 배열을 문자열로 받기
{
    const fruits = ['apple', 'banana', 'orange'];
    // let string = '';
    // for(let item of fruits){
    //     string += item;
    // }
    // console.log(string);
    // join() 사용하면 구분자를 통해 string으로 받을 수 있다
    const result = fruits.join(', and '); // 구분자?
    console.log(result);
}
console.clear();

// 문자열을 배열로 만들기
{
    const fruits = '사과, 키워, 바나나, 자두';
    const result = fruits.split(','); // 구분자?, 배열 개수?
    console.log(result);
}
console.clear();

// 배열 거꾸로 만들기
{
    const arr = [1,2,3,4,5];
    console.log(arr.reverse());
    console.log(arr); // reverse 이후 배열 원소가 뒤바뀐것을 확인할 수 있음
}
console.clear();

// 0, 1번 원소를 제외하고 새로운 배열 만들기
{
    const arr = [1, 2, 3, 4, 5];
    const result = arr.slice(2);
    // splice는 배열자체를 수정해버림
    console.log(result);
    console.log(arr);
}
console.clear();

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age  = age;
        this.enrolled = enrolled;
        this.score = score;
    };
};
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

// 점수가 90점인 학생 찾기
{
    // for (let index = 0; index < students.length; index++) {
    //     if(students[index].score >= 90){
    //         console.log(students[index].name);
    //     }
    // }
    // find() : true 일때 리턴된다는 점
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// 수업에 등록한 학생들만 골라서 배열 만들기
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}
console.clear();

// 점수만 뽑아서 배열로 만들기 map : 배열안에 들어있는 모든 요소들을 콜백함수에서 가공되어 대체됌
{
    const result = students.map((student) => student.score);
    console.log(result);
}
console.clear();

// 50점보다 낮은 사람이 있는지 없는지 확인, some(): 콜백함수를 통해 true가 리턴되는지 안되는지 
{
    // some() 콜백함수를 통해 하나라도 만족하면 true
    const result = students.some((student) => student.score < 50);
    console.log(result);

    // every() 콜백함수를 통해 모든 요소를 확인하며 전부 만족해야 true 리턴, 하나라도 아니라면 false 리턴
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
}
console.clear();

// 모든 학생의 평균 점수 출력, reduce()
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// 학생들의 모든 점수를 문자열로 만들기
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result)
}

{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join();
    console.log(result);
}