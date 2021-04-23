# Nodejs를 이용한 다양한 APP 제작

<br>

## 동기와 비동기
> nodejs를 이해하기 위해서 꼭 필요한 개념인 'synchronous & asynchronous'

* synchronous: 일이 진행되는 순서대로 처리. 하나의 일이 처리되기 전에는 다음 일을 할 수 없음
* asynchronous: 병렬적으로 동시에 여러가지 일을 처리하는 것
  * nodejs에는 async를 위한 좋은 것들이 많이 있다.
  * 효율적이지만 매우 복잡하고 어렵다.

```javascript
let fs = require('fs');

// readFileSync
console.log('A');
let result = fs.readFileSync('sample.txt', 'utf-8');
console.log(result);
console.log('C');
// A B C

// async readFile
console.log('A');
fs.readFile('sample.txt', 'utf-8', function (err, res) {
    console.log(res);
});
console.log('C');
// A C B
```
* 비동기처리의 경우 callback 함수가 실행되는 것과 동시에 `console.log('C');`가 실행됨

<br>

## callback
> 어떠한 작업이 끝난 후에 우리가 입력한 함수를 처리하는 과정. '나중에 처리해라' 라는 의미

```javascript
let a = function() { console.log('a'); };
a();

function slowfunc(callback) {
    callback();
}

slowfunc(a);
```

<br>

## Nodejs의 패키지 매니저와 PM2
> 패키지란 독립적으로 실행되는 소프트웨어를 의미하며, 어떤 소프트웨어의 부품도 패키지라고 할 수 있다. 이러한 패키지를 관리해주는 프로그램을 패키지 매니저라고 한다.

* NPM
  * nodejs의 패키지 매니저
* PM2
  * 나의 웹사이트 파일을 실행하고, 멈추고, 꺼지면 되살리는 등의 기능을 제공해준다.
  * 즉, 내가 만든 웹사이트를 서버 쪽에서 관리할 수 있게 해주는 프로그램
  * `pm2 start 파일이름`: 서버 실행
  * `pm2 start 파일이름 --watch`: 파일의 내용이 수정되면 즉시 반영
  * `pm2 stop 파일이름`: 서버 중지
  * `pm2 list`: pm2가 관리하고 있는 파일 목록 확인
  * `pm2 log`: pm2 log 확인
