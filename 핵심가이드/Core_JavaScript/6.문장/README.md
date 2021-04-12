# 문장
> 5장의 표현식은 값을 계산하는 자바스크립트의 구문이다. 표현식 안의 연산자는 연산을 수행하지만 일반적으로 표현식은 아무런 일을 하지 않는다. 어떠한 일이 일어나게 하려면 완전한 문장 또는 명령과 유사한 자바스크립트 문장을 사용해야 한다.

<br>

### 자바스크립트 문장 목록
> 많은 문장이 있지만 이 중 몰랐던 문장들에 대해서만 알아보겠다.
* 표현식문
* 복합문
* if / else if / switch
* while / do while / for / for in
* 라벨
* break / continue
* var / let / const
* function / return / with
* import / export / empty

<br>

### 라벨
> 라벨은 문장에 붙여서 프로그램의 어느 곳에서나 그 문장을 참조할 수 있 게끔 해준다.
```javascript
infinity_loop: // 이 부분이 라벨
    while (1)
    {
        console.log("infinity");
    }
```

<br>

### with
> with문은 일시적으로 범위 체인을 수정하는 데 사용된다.
```javascript
with (object)
    statement
```
주로 타이핑할 양을 줄이기 위해 with 문을 사용한다.
```javascript
frames[1].documents.forms[0].address_field.value
with(frames[1].document.forms[0]) // 이런식으로 반복을 줄일 수 있다.
{
    name.value;
    address.value;
    email.value;
}
```
하지만 `with`문을 사용한 javascript 코드는 최적화하기 어렵기 때문에 타이핑하는 양을 줄이기 위해서는 아래의 방법을 사용하는 것이 더 효과적이다.
```javascript
let form = frames[1].document.forms[0];
form.name.value;
form.address.value;
form.email.value;
```