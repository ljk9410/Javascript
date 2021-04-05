# 데이터의 형과 값
> 프로그래밍 언어가 지원하는 데이터 형은 그 언어의 가장 기본이 되는 부분이다. js 는 숫자, 문자열, bool값 등 세가지 기본적인 데이터 형을 지원한다. 또한 객체와 배열(복합 데이터형) 뿐만 아니라 함수도 데이터 형으로 지원한다는 특징이 있다.
```javascript
// <숫자>
// js는 java나 c와 달리 메모리 별 데이터의 형 구분이 없다
// 숫자는 8바이트 부동 소수점 숫자 형식을 사용
// 8진법은 숫자 앞에 '0'을, 16진법은 '0x'를 붙여서 구분한다
3
0
10000000
-123456789
026
0xff
3.141592
// Number 객체 안에는 특수 숫자 값 프로퍼티가 존재한다
Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY


// <문자열>
// js의 문자열 리터럴은 작은따옴표('')와 큰따옴표("") 둘 다 사용가능
// 다른 언어와 같이 따옴표 내에서 이스케이프 문자(\)를 사용
"hello world";
let msg = "hello" + "world";
let length = msg.length // 문자열의 length 프로퍼티

// <bool 값>
// bool값은 true와 false 두 가지가 존재
// 어떤 값이 참인지 거짓인지만을 판별하기 위한 데이터 형
let a = 4;
if (a == 4)
    console.log('a');
else
    console.log('no a');


// <함수>
// 프로그램에서 한 번 정의되면 여러번 사용할 수 있는 것
// 코드의 재활용성을 극도로 높이고 반복을 최소화할 수 있게 만들어준다.
// js에서는 함수가 최상위 클래스의 데이터 값이다
// 함수가 데이터형의 한 부분이라는 것은 많은 유연성을 제공한다
// 다른 함수의 인자로 함수가 전달될 수 있는 부분이 예시 중 하나
let square = new Function("x", "return x*x;");
function square2(x) { return x*x; };
let square3 = function(x) { return x*x; };


// <객체>
// 객체는 이름이 지정된 데이터들의 집합
// 지정된 값을 '프로퍼티'라고 부른다
// 객체 내에는 함수 리터럴도 들어갈 수 있으며, 이를 호출하면 객체의 
// 메서드(method)라고 부른다
let image = { width:3, heigth:10 };
image.width
image.heigth
document.write("this is method");


// <배열>
// 배열은 객체와 마찬가지로 데이터 값의 집합이다
// 객체에 포함된 데이터 값은 이름을 가지지만 배열은 숫자를 가진다.
// 배열의 시작은 '0'부터
let array = [1, 2, 3, 4, 5];
array[0] // 1
array[1] // 2


// <null 과 undefined>
// null은 값 or 객체가 없음을 의미한다
// undefind는 변수를 지정했지만 초기화 값이 없을 때 나타난다.

// 이 밖에도 정규식, Date객체 등이 있으며 이후에 더 자세하게 배운다.
```