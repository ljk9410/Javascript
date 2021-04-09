# NodeJS
> nodejs를 공부한 것을 저장하는 공간

## 시작
1. nodejs는 'web'에만 묶여있던 javascript를 'web' 밖으로 꺼내서 컴퓨터를 다른 언어와 마찬가지로 동작시키게 하게 만들어줬다.
2. nodejs는 'web server'로써 작동한다.
3. nodejs는 apache와 nginx와 같은 서버와 다르게 코드를 이용해서 사용자에게 전송하는 데이터를 변화시킬 수 있다. -> 프로그래밍적으로 사용자에게 전송할 데이터를 생성한다.

<br>

## URL
> `http://www.junglee.kyu:3000/main?id=HTML&page=12` 의 형태
* 'http': protocol 통신 규칙을 의미
  * 사용자가 서버에 접속할 때 어떤 방식으로 통신할 것인가에 대한 부분
  * hyper text transfer protocol
  * 웹 브라우저와 웹 서버가 데이터를 주고 받기 위한 통신 규칙
* 'www.어쩌고저쩌고': host(domain name)
  * 특정한 인터넷에 연결되어 있는 컴퓨터를 가리키는 주소
* '3000': port
  * 한 대의 컴퓨터 안에 여러 개의 서버가 있을 수 있다.
  * 클라이언트가 접속했을 때 어떤 서버와 통신할지 애매할 수 있다.
  * 3000포트에 연결되어 있는 서버와 통신한다는 것을 의미
  * 웹서버는 80포트와 443포트를 기본으로 사용한다
* '/main': path
  * 컴퓨터 안에 있는 어떤 dir 어떤 file인지 나타낸다
* 'id=': query string (주인공)
  * query string의 시작은 `?` 으로 시작하기로 약속
  * query string의 값을 변경하면 원하는 데이터를 요청할 수 있다.
  * ID에 따라 사용자에게 적당한 데이터를 전송

<br>

## URL을 통해서 입력된 값 사용하기
> query string에 따라 다른 정보를 출력하는 웹애플리케이션 만들기

<br>

### 1. query string에 따라 바뀌는 데이터 값 가져오기
```javascript
let http = require('http');
let fs = require('fs');
let url = require('url');
let app = http.createServer(function(request,response){
    let _url = request.url;
    console.log(_url);
    let queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);
 
});
app.listen(3000);
```

* `let url = require('url');`
  * url 모듈을 사용하겠다
* `let queryData = url.parse(request.url, true).query;`
  * parse는 탐색하는 것
  * request.url에 있는 것을 true(객체로)/false(문자열로) 탐색
  * query 객체란 query string을 의미, url 중에서 '?' 뒷부분
* `response.end(queryData.id);`
  * 정보를 출력하는데, queryData의 id를 출력하겠다.

<br>

### 2. query string을 이용해서 동적인 웹앱 구성하기
> 이를 통해서 웹페이지가 1억개가 되더라도 원하는 부분을 수정하면 모든 웹페이지에 동시 적용이 되게 만들 수 있다. 이는 효율성을 폭발적으로 증가시키는 기적이라고 볼 수 있다.
```javascript
let http = require('http');
let fs = require('fs');
let url = require('url');
let app = http.createServer(function(request,response){
    let _url = request.url;
    let queryData = url.parse(_url, true).query;
    let title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    let template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
      <img src="coding.jpg" width="100%">
      </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
      </p>
    </body>
    </html>
    `;
    response.end(template);
 
});
app.listen(3000);
```
* `template`에 template 리터럴을 이용해서 템플릿이 될 html 코드를 선언
* query string의 id 값에 따라 동적으로 바뀔 부분에 변수를 삽입
* 링크 부분도 query string에 맞게 수정

<br>

[CRUD]()
> `Create Read Update Delete` <br>
> 이 부분에서는 file을 nodejs로 읽을 수 있는 방법을 알아본다