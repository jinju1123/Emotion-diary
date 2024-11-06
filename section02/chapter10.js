// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
let date2 = new Date("1993/11/23/10:10:10");

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(UTC)로 부터 몇 ms가 지났는지를 의미하는 숫자값
// getTime() 메서드는 Date 객체에 저장된 날짜를 타임스탬프로 변환해 반환한다.
let ts1 = date1.getTime();
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
// 자바스크립트에서 월은 0부터 시작한다. index처럼 생각하면 쉽다.
let month = date1.getMonth() + 1;
let date = date1.getDate();
let day = date1.getDay(); // 0은 일요일

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
let milliseconds = date1.getMilliseconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(
  date1.toString(), // Thu Mar 30 2023 23:59:59 GMT+0900 (한국 표준시) -> 날짜와 시간
  date1.toDateString() // Thu Mar 30 2023 -> 날짜만
);
console.log(
  date1.toLocaleString(), // 2023. 3. 30. 오후 11:59:59 -> 현지화된 날짜와 시간
  date1.toLocaleDateString() // 2023. 3. 30. -> 현지화된 날짜만
);
