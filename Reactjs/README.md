# React.js 공부정리

## 설치하기
* `npm`을 이용한 설치
  * `npm`이란 `nodejs`로 만든 프로그램을 쉽게 설치해주는 일종의 앱스토어
  * `nodejs`를 깔면 `npm`이 자동으로 설치됨
  * `npm install -g create-react-app` 명령어를 CLI에서 실행
* `npx`를 이용한 설치
  * 공식문서에서 권장하는 방식
  * `npx`란 `create-react-app`을 임시로 설치해서 한번만 사용하게 만들어줌
  * 컴퓨터의 공간 효율성 증대 및 최신 버전 유지에 관해서 장점이 있다

## React 환경설정
* `react app`을 만들기 원하는 폴더로 가서 `create-react-app .` 실행

## 실행하기
* `npm run start`
* react를 제공하는 sample application

## 개발 시작하기
* 기본적인 수정 부분
  * src -> 대부분 `App.js` 와 `index.js` 수정
* CSS 수정
  * src -> `index.css` 부분을 수정

## Deploy
* `npm run build`
  * 기본적으로 react는 개발자를 도와주기 위한 도구이기 때문에 용량이 크고, 보안적인 문제도 발생할 수 있다
  * 이를 방지하기 위해 `npm rum start` 대신 사용
* `npx serve -s build`
  * server를 실행하는데 `build`에 있는 코드를 사용

## 컴퍼넌트
* 하나의 최상위 태그만 사용해야함
* 컴퍼넌트의 이름에 집중하도록 하면서 복잡도를 많이 줄여준다 -> 정리정돈의 도구라고 생각하면 됨
```javascript
class Name extends Component {
  render() {
    return ();
  }
}
```

## props
* 컴퍼넌트 안에서 변수처럼 사용할 수 있는 객체
```javascript
//컴퍼넌트 안에서 아래와 같이 선언
{this.props.Name}
```

## state
* 컴퍼넌트 구현에 필요한 데이터
* 조금 더 복잡하고 효율적으로 컴퍼넌트를 구현하기 위해 필요
* 컴퍼넌트가 내부적으로(외부적으로 알리지 않게끔) 정보를 사용하고 싶을때 state를 이용

## 이벤트 & state & props
* react에서는 `state`나 `props`의 값이 바뀌면 해당되는 `render()`에 의해 웹사이트의 화면이 다시 그려진다
* 이벤트 설치
  * `onClick={}` 의 형식을 반드시 지켜야함
  * `<a>` 태그에 이벤트를 설치하면 자동적으로 reload가 되기 때문에 rendering 없이도 동적인 것을 보여줄 수 있는 javascript의 취지와는 맞지 않게 됨
  * 이를 위해서 `e.preventDefault()`라는 `e` 객체의 메소드를 사용
* 이벤트로 state 변경하기
  * `bind()` 를 이용해서 `this`를 엮어줘야 함
  * `setState()` 를 이용, state의 상태를 변경해주기
    * 초기 state값을 정한 뒤에 컴퍼넌트의 state를 바꾸기 위해서 `setState()` 사용
    * 초기화 이후 `this.state.mode = 'welcome` 이런 식으로 바꾸게 되면 react가 변경을 인지할 수 없다
    * 따라서 `this.setState({mode:'welcome'})` 처럼 객체로 변경해야 함

## 컴포넌트 이벤트 만들기
```javascript
<Script
  onChangePage={
    function() {
      this.setState(
        {mode:'welcome'},
      )
    }.bind(this)
  }
>
```
* 컴포넌트 태그 안에서 만들고자 하는 이벤트를 선언
```javascript
<h1>
  <a href ="/" onClick={
    function(e){
      e.preventDefault();
      this.props.onChangePage();
    }.bind(this)}>
```
* 그 이벤트를 컴포넌트의 props로 전달
* 컴포넌트 안에서 원하는 이벤트로 처리(ex onClick)