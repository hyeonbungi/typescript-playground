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

export function runExample03() {
  function processLongRunningTask() {
    // 대단히 오래 걸리는 작업
    console.log('작업을 완료했습니다.\n');
  }

  console.log('작업을 시작합니다.');
  setTimeout(processLongRunningTask, 0);
  console.log('다음 작업을 계속합니다.\n');
}
