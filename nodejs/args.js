//`process.argv[0]`: nodejs 실행 프로그램
//`process.argv[1]`: 실행파일 위치
//`process.argv[2]`: 입력 인자의 순서대로 진행
let args = process.argv;
if (args[2] === '1')
    console.log("Right");
else
    console.log("Wrong");