// 1. Spread 연산자
// --> Spread : 흩뿌리다, 펼치다 라는 뜻
// --> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
//console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

//console.log(obj2);

function funcA(p1, p2, p3) {
  //console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// --> Rest는 나머지, 나머지 매개변수

function funcB(...rest) {
  console.log(rest);
}

funcB(...arr1);
funcB(1, 2, 3, 4);

// 얕은 복사
let o1 = { name: "이진주 " };
let o2 = o1;

// 깊은 복사
let o3 = { ...o1 };

// 얕은 비교 (객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다.)
//console.log(o1 === o2); // true
//console.log(o1 === o3); // false

// 깊은 비교 (프로퍼티(값) 비교)
//console.log(JSON.stringify(o1) === JSON.stringify(o3)); // true
