# 객체
> 객체는 관련이 있는 여러 데이터(프로퍼티), 함수(메소드)들을 모아 이름을 붙인 집합이다. 이 책이 쓰여질 당시에는 javascript가 Class 기능을 지원하지 않기 때문에 이를 제외한 내용들을 설명한다. 따라서 Class에 대한 내용은 다른 곳에서 익히고 정리한 내용이다.

```javascript
// 기본형태
// obj = { key: value };
let obj1 = {
    name: 'lee',
    age: '28',
    job: 'developer'
}; // literal syntax
console.log(obj1.name);
console.log(['age']);
let obj2 = new Object(); // constructor syntax

// javascript의 객체에는 객체 생성 이후에 데이터를 추가할 수 있다.
obj1.name = 'lee';
obj1.age = 28;
```

<br>

### 객체/배열과 반복문
```javascript
let memberArray = ['kim', 'lee', 'park'];

let person = {
    name: 'lee',
    age: 28,
    job: 'developer'
};

console.group('<array loop>');
for (let i = 0; i < memberArray.length; i++)
    console.log(i, memberArray[i]);
console.groupEnd('<array loop>');

console.group('<object loop>');
for (let n in person)
    console.log(n, person[n]);
console.groupEnd('<object loop>');
```

<br>

### this
> 프로그래밍에서 메소드가 속해 있는 객체를 가리키는 대명사. 객체지향에서 코드의 유연함을 가져다 줌.
```javascript
// 1. 아래의 경우 sum 함수 내의 first, second는 define 되지 않았다는 오류가 생김
let game = {
    name: 'lee',
    first: 30,
    second: 45,
    sum: () => { return first + second; }
};

// 2. 아래의 경우 객체의 이름이 바뀌면 return 속 객체의 이름도 변경해야 하는 번거로움이 생김. 유연성이 떨어진다
let game = {
    name: 'lee',
    first: 30,
    second: 45,
    sum: () => { return game.first + game.second; }
};

// 3. this - 객체의 이름이 변경되어도, 유연하게 함수에서 참조할 수 있다.
let game = {
    name: 'lee',
    first: 30,
    second: 45,
    sum: function() { return this.first + this.second; }
};
```

<br>

### constructor의 필요성
> constructor가 없다면 같은 형태의 객체가 여러 개라면, 이 객체를 전부 수정해줘야 하는 불편함이 존재한다.

> constructor는 객체를 공장처럼 찍어낼 수 있게끔 해주는 중요한 부분이다.
```javascript
// 공장처럼 찍어내는 객체의 예시
let d2019 = new Date('2019-04-15');
let d2020 = new Date();
```
* `Date()`
  * 함수를 호출하는 것처럼 보이는데 실제로 찍어보면 함수가 맞다.
  * `native code`로 내장된 함수이다.

```javascript
function Person(name, first, second) {
    this.name = name,
    this.first = first,
    this.second = second,
    this.sum = function () {
        return this.first+this.second;
    }
}

let kim = new Person('kim', 10, 20);
let lee = new Person('lee', 15, 25);

console.log(kim.sum(), lee.sum());
```
* 함수호출 앞에 `new`가 붙으면 그 함수는 객체를 생성하는 생성자가 된다.

<br>

### prototype-based language
> 어떤 사물의 공통된 모습, 본래의 모습. 모든 객체들이 메소드와 프로퍼티를 상속 받기 위한 템플릿으로써 prototype object를 가진다는 의미. 즉 한 객체에 정의된 메소드와 프로퍼티를 다른 객체에서 사용할 수 있도록 만든 것이다.

> 정확히 말하면 상속되는 메소드와 프로퍼티들은 각 객체가 아니라 객체 생성자의 prototype이라는 속성에 정의되어 있다.
```javascript
// 위에서 짰던 아래의 코드는 생성자를 통해 객체가 만들어질 때마다 함수를 계속해서 새로 생성하기 때문에 메모리가 많이 낭비된다. 즉, 생성자 안에서 method를 만드는 것의 단점
function Person(name, first, second) {
    this.name = name,
    this.first = first,
    this.second = second,
    this.sum = function () {
        return this.first+this.second;
    }
}

// 그렇다면 모든 객체가 공통적으로 사용하는 속성을 만들 수 있으면 어떨까?
function Person(name, first, second) {
    this.name = name,
    this.first = first,
    this.second = second
}

Person.prototype.sum = function () {
    return this.first+this.second;
}

let kim = new Person('kim', 10, 20);
let lee = new Person('lee', 15, 25);

// Object.prototype.function 을 생성자함수 바깥에서 정의하면 얻을 수 있는 이익
// 1. 객체를 많이 만들어도 코드가 한번만 실행되기 때문에 성능이 올라감
// 2. 자연스럽게 메모리도 절약
// 3. 함수를 수정하면 모든 객체에 적용이 됨
```
* javascript는 객체가 생성되면 'prototype chain'이 생성됨
* method가 호출되면 맨 처음 자기 자신 내에 그 method가 있는지 확인
  * 있다면 그 method를 호출, 실행
  * 없다면 자신 객체의 생성자에 그 method가 정의되어 있는지 확인
  * 이를 반복

<br>

### class
> 객체지향 언어에서 객체를 사용하는 부담을 줄여주는 문법. constructor 함수보다 더 쉽게 객체 공장을 만들어준다.

> ES6부터 이 문법을 지원한다.
```javascript
// 객체 공장 생성
class Person {

}

// 객체의 초기 상태를 setting
class Person {
        // constructor 함수를 반드시 실행해야 한다.
    constructor(name, first, second) {
        this.name = name,
        this.first = first,
        this. second = second;
    }
    }
}

// class method 만들기
class Person {
    constructor(name, first, second) {
        this.name = name,
        this.first = first,
        this. second = second;
    }

    sum() {
        return this.first + this.second;
    }
}
```

<br>

### 상속
> class 에 새로운 메소드, 프로퍼티를 추가하고 제거하는 유지보수를 쉽게 해주는 기능을 제공
```javascript
class Person {
    constructor(name, first, second) {
        this.name = name,
        this.first = first,
        this. second = second;
    }

    sum() {
        return this.first + this.second;
    }
}

class PersonPlus extends Person {
    avg() {
        return (this.first + this.second) / 2;
    }
}
// 새로운 객체를 만들 필요 없이 기존의 객체가 가지고 있는 메소드와 프로퍼티를 그대로 상속받아 새로운 기능을 붙인다.
```

<br>

### super
> 부모 class의 기능을 실행하면서 자식이 가지고 있는 기능 중 중복을 제거하는 기능
```javascript
class Person {
    constructor(name, first, second) {
        this.name = name,
        this.first = first,
        this. second = second;
    }

    sum() {
        return this.first + this.second;
    }
}

class PersonPlus extends Person {
    constructor(name, first, second, third) {
        super(name, first, second);
        this.third = third;
    }

    sum() {
        return super.sum() + this.third;
    }
    
    avg() {
        return (this.first + this.second + this.third) / 3;
    }
}
```
* `super()`: 부모 클래스의 constructor() 함수를 의미
* `super.`: 부모 클래스자체를 의미