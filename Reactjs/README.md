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