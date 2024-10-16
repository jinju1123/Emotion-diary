// 1. 콜백함수
// 불려지게 되어 나중에 실행되는 함수

function main(value) {
    value();
}

// 자스에서는 함수도 숫자와 문자처럼 값으로 취급한다.

// 기본
function sub() {
    //console.log("I am sub");
}

main(sub);

// 함수표현식 사용하기
main(function sub() {
    //console.log("I am sub");
});

// 익명 함수 사용하기
main(function () {
    //console.log("I am sub");
});

// 화살표 함수 사용하기
main( () => {
    //console.log("I am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
    for(let i=1; i<=count; i++) {
        callback(i);
    }
}

repeat(5, (i) => {
    console.log(i);
});

repeat(5, (i) => {
    console.log(i * 2);
});

repeat(5, (i) => {
    console.log(i * 3);
});