# 함수
> 자바스크립트 언어에서 함수는 중요하고도 복잡한 부분이다. 이 장에서는 구문적인 측면에서 함수의 정의와 호출, 데이터형으로써의 함수, 함수 관련 프로퍼티에 대해 알아본다.

<br>

### 함수의 정의와 호출
```javascript
// function 문
function add(arg1, arg2)
{
    return arg1 + arg2;
}
add(1, 2);

// Function 생성자
let minus = new Function("arg1", "arg2", "return arg1 - arg2;");
minus(2, 1);

// 함수 리터럴
let f = function(x) { return x * x; };
f(5);
```

<br>

### 데이터로 사용되는 함수
> 자바스크립트에서 함수는 데이터이며, 이것은 다른 데이터 값처럼 변수에 할당되고, 배열의 요소나 객체의 프로퍼티에 저장(method)되고 함수에 전달될 수 있다.
```javascript
function square(x) { return x * x; };
a = square(4); // 16
b = square; // square함수를 참조
c = b(5); // 25

// 함수를 배열의 요소에 할당할 때는 이름을 가질 필요가 없다.
a = new Array(10);
a[0] = function(x) {return x*x;};
a[1] = 20;
a[2] = a[0](a[1]);
```

##### [예제 7-2]
```javascript
function add(x, y) { return x + y; };
function subtract(x, y) { return x - y; };
function multiply(x, y) { return x * y; };
function divide(x, y) { return x / y; };

function operate(operator, arg1, arg2)
{
    return operator(arg1, arg2);
}
let result = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
```

<br>

### 함수의 인자: arguments 객체
> arguments는 arguments 객체를 참조하는 호출 객체의 특정한 프로퍼티이다. 이 객체는 arguments[] 배열로도 사용 가능하며, 함수에 전달된 인자의 값을 가지고 있다. 
```javascript
function f(x, y, z)
{
    if (arguments.length != 3)
    {
        alert(`function f called with ${argument.length}arguments but, it expects 3 arguments`);
        return null;
    }
    else
    {
        document.write(`arguments: ${x}, ${y}, ${z}`);
    }
}
```

##### `callee` 프로퍼티
> arguments 객체의 프로퍼티로 현재 실행되고 있는 함수를 참조한다.
```javascript
function(x) {
    if (x > 1) return x * arguments.callee(x - 1);
    return x;
}
```

##### `caller` 프로퍼티
> 과거에는 사용되었지만 최신의 많은 브라우저에서는 기능을 지원하지 않기 때문에 사용을 권장하지 않는다.

<br>

이외에 함수의 많은 부분은 객체와 연관이 되어있기 때문에 <8장. 객체> 부분을 읽으면서 함수의 다른 부분들을 이야기하겠다.