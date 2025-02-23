export function runExample01() {
  function first() {
    second();
    console.log('첫 번째 함수 호출');
  }

  function second() {
    third();
    console.log('두 번째 함수 호출');
  }

  function third() {
    console.log('세 번째 함수 호출');
  }

  first();
  console.log();
}

export function runExample02() {
  function run() {
    console.log('3초 후 실행됩니다.\n');
  }

  console.log('시작');
  setTimeout(run, 3000);
  console.log('끝\n');
}
