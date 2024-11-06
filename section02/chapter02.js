// 단락 평가

function returnTrue() {
  console.log("True 함수");
  return 10;
}

function returnFalse() {
  console.log("False 함수");
  return undefined;
}

console.log(returnTrue() || returnFalse()); // True 함수 10

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name);
  console.log(name || "person의 값이 없습니다.");
}

printName();
printName({ name: "이진주" });

// True || True 면 앞에 값이 반환
// True && True 면 뒤에 값이 반환
