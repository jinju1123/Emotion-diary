// 함수선언

// function greeting() {
//     console.log("방가방가");
// }
// console.log("호출 전");
// greeting();
// console.log("호출 후");

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

function getArea(width, height) {
    function another() { // 중첩 함수
        console.log("another");
    }

    another();

    let area = width * height;

    return area;
}

// 자바스크립트는 선언을 뒤에 해도 정상적으로 실행해준다.
// 호이스팅
// --> 끌어올리다 라는 뜻