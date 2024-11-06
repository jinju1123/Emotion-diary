// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
  return {
    name: "이진주",
    id: "jinju",
  };
}

console.log(getData()); // promise 객체를 반환한다.

// 애초에 promise를 반환하는 비동기 함수였다면
// async는 별다른 기능을 하지 않고 promise를 반환하도록 내버려둔다.
async function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이진주",
        id: "jinju",
      });
    }, 1500);
  });
}

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData2();
  console.log(data);
}

printData();
