// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하며 새로운 배열로 반환

let arr1 = [
  { name: "이진주", hobby: "클라이밍" },
  { name: "무드릭", hobby: "클라이밍" },
  { name: "파머", hobby: "헬스" },
];

const climbingPeople = arr1.filter((item) => item.hobby === "클라이밍");

console.log(climbingPeople);
// [{name: '이진주', hobby: '클라이밍'}, {name: '무드릭', hobby: '클라이밍'}]

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고
// 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1); // [2, 4 ,6]

let names = arr1.map((item) => item.name);
console.log(names); // ['이진주', '무드릭', '파머']

// 3. sort
// 배열을 사전순으로 정렬하는 메서드

let arr3 = [10, 3, 5];

arr3.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1;
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1;
  } else {
    return 0;
  }
});

console.log(arr3); // [3, 5, 10]

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5); // ["c", "a", "b"]
console.log(sorted); // ["a", "b", "c"]

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
// 구분자를 생략하면 기본값을 콤마(,)로 제공한다.
let arr6 = ["Hi,", "I'm", "winterwood"];

const joined = arr6.join(" ");

console.log(joined); // Hi, I'm winterwood

// 6. reduce
// 배열 요소를 모두 순회하면서 인수로 제공한 함수를 실행하고,
// 단 하나의 결괏값만 반환하는 메서드
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((acc, item) => acc + item, 0);
console.log(result); // 15
