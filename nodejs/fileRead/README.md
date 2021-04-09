# CRUD
> `Create Read Update Delete` <br>
> 이 부분에서는 file을 nodejs로 읽을 수 있는 방법을 알아본다
<br>

## nodejs 모듈 'fs'
> nodejs의 모듈인 file system. nodejs에서 파일을 이용할 수 있게끔 만들어주는 기능들이 담긴 모듈이다.

* `let fs = require('fs');`: 모듈을 불러온다.
* `fs.readFile()`
```javascript
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```