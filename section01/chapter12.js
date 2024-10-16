// 1. 함수 표현식

function funcA() {
    //console.log("funcA");
}

let varA = funcA;
varA();

// 함수명이 아닌 변수명(varB)으로 호출해야함. 
// 어차피 함수명으로 불리지 않으니 이름을 생략해도 됨. (==익명함수)
// 호이스팅의 대상이 되지 않음.
let varB = function () {
    //console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);    
    return value + 1
};

console.log(varC(10));