# Javscript Drum Kit
> 자바스크립트를 이용한 간단한 웹 드럼 만들기

## 사용 지식

### html data 속성
* 어떤 태그에서든 사용할 수 있는 속성
* `data-아무이름` 형태로 사용
* `class 태그`와 그 사용법이 비슷함

### keydown event
* `window.addEventListener('keydown', function(){});`
* 웹 브라우저에서 키보드가 눌렸을 때 function을 호출하는 event
* 이 과제에서는 `keydown.keyCode` property를 사용

### transitionend event
* `tags.addEventListener('transitionend', function(){});`
* transition이 발생한 태그에 대한 이벤트

### audio 객체
* 웹 브라우저의 음악파일에 관한 태그이자 객체
* 이 객체 안에는 `audio.play()`, `audio.pause()` 등의 메소드가 있다
* `audio.currentTime = 0`
  * `currentTime` 프로퍼티는 미디어 태그에 쓰임
  * 플레이 시간을 지정하는 프로퍼티

### querySelector 내에서 태그 속 attribute를 선택하는 방법
* `const audio = document.querySelector(`audio[data-keys="${e.keyCode}"]`);`

<br>

## 오류 및 해결
> 오류와 그 원인 그리고 해결

### document.querySelectorAll()
* 동일한 이름을 가진 태그들을 모두 선택하는 메소드
* `NodeList` 배열로 return
* 유사배열이기 때문에 모든 태그들에 대해 무언가를 하고 싶다면 `forEach()`를 사용
* `NodeList`를 지원하지 않는 브라우저도 존재

### <script>
* 스크립트 태그를 html 태그들 위에 사용했더니 querySelectorAll 함수에서 빈 배열을 return
* 모든 html 태그를 parse한 뒤 사용해야 제대로 된 배열을 return