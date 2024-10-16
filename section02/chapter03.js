// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
//console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "이진주",
  age: 30,
  hobby: "클라이밍",
};

let { name, age: myAge, hobby } = person;
//console.log(name, myAge, hobby)
// myAge로 원하는 이름을 설정해줄 수 있다.

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby }) => {
  //console.log(name, age, hobby);
};

func(person);
