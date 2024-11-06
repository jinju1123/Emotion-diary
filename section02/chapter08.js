// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

// 기본 문법
//function cb(item, index, array) {
//   요소에 무언가를 할 수 있다.
//}
//arr.forEach(cb);

let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2, arr);
  // 0, 2
  // 1, 4
  // 2, 6
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log(doubledArr); // [2, 4, 6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

console.log(isInclude); // false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// indexOf는 기본적으로 얕은 복사이기 때문에 객체타입일 경우 못찾는다.
// 단순한 원시타입의 객체를 찾을 땐 indexOf 사용하자.

// 기본 문법
// arr.indexOf(item, fromIndex);
// item은 찾으려는 요솟값, formIndex는 탐색을 시작할 인덱스 번호
// 찾으려는 요소가 없다면 -1 반환

let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index); // 1

let objectArr = [{ name: "이진주" }, { name: "주진이" }];

console.log(objectArr.indexOf({ name: "이진주" })); // -1

// 객체 타입은 findIndex를 사용해야 한다.
console.log(objectArr.findIndex((item) => item.name === "이진주")); // 0

// 4. findIndex
// 모든 요소를 순화하면서, 콜백함수를 만족하는
// 특정 요소에 인덱스(위치)를 반환하는 메서드

// 기본 문법
// arr.findIndex( callback(item, index, array) );

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 2); // 1

console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "이진주" }, { name: "주진이" }];

const finded = arr5.find((item) => item.name === "이진주");
console.log(finded);
