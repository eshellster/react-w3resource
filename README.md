
# [State and Lifecycle](https://www.w3resource.com/react/state-and-lifecycle.php)

이 튜토리얼에서는 상태의 개념을 살펴볼 것이며, 이전 튜토리얼에서 똑딱 거리는 시계 예제를 다시 작성하여 수행 할 것입니다.

```javascript
function tick() {
  const element = (
    <div€
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root') );
}
setInterval(tick, 1000);
```



위의 내용을 비트로 나누어 시계 모양을 캡슐화하여 시작할 수 있습니다.

```javascript
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```



```javascript
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);
```



그러나 중요한 요구 사항이 누락되었습니다. Clock이 타이머를 설정하고 매초마다 UI를 업데이트한다는 사실은 Clock의 구현 세부 사항이어야합니다.

이상적으로 우리는 이것을 한 번 작성하고 시계 자체를 업데이트하고 싶습니다.

```javascript
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```



이를 구현하려면 Clock 컴포넌트에 "state"를 추가해야합니다.

State는 props와 비슷하지만 private이며 구성 요소와 변경 가능한 구성 요소에 의해 완전히 제어되며 클래스 구성 요소에서만 사용할 수 있습니다. 따라서 위의 Clock 함수 구성 요소를 클래스 구성 요소로 변환해야합니다.

## **함수를 클래스로 변환**

Clock과 같은 함수 구성 요소를 5 단계로 클래스로 변환 할 수 있습니다.

1. React.Component를 확장하는 동일한 이름으로 ES6 클래스를 만듭니다.
2. render ()라는 하나의 빈 메서드를 추가합니다.
3. 함수의 본문을 render () 메서드로 이동합니다.
4. render () 본문에서 props를 this.props로 바꿉니다.
5. 나머지 빈 함수 선언을 삭제하십시오.

```javascript
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```



시계는 이제 함수가 아닌 클래스로 정의됩니다.

render 메서드는 업데이트가 발생할 때마다 호출되지만 렌더링하는 한 동일한 DOM 노드에 Clock 클래스의 단일 인스턴스 만 사용됩니다. 이를 통해 로컬 상태 및 수명주기 메서드와 같은 추가 기능을 사용할 수 있습니다.

##  **클래스에 로컬 상태 추가**

날짜를 소품에서 상태로 세 단계로 이동합니다.

1. render () 메서드에서 this.props.date를 this.state.date로 바꿉니다.
2. 초기 this.state를 할당하는 클래스 생성자를 추가합니다.
3. <Clock /> 요소에서 날짜 소품을 제거합니다.

## 최종 코드 샘플은 다음과 같습니다.

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div€
        <h1>Hello, world!>/h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```



다음으로 시계가 자체 타이머를 설정하고 매초마다 업데이트되도록합니다.

## **클래스에 수명주기 메서드 추가**

많은 구성 요소가있는 응용 프로그램에서는 구성 요소가 파괴 될 때 사용하는 리소스를 확보하는 것이 매우 중요합니다.

Clock이 처음으로 DOM에 렌더링 될 때마다 타이머를 설정하고 싶습니다. 이것을 React에서는 "마운팅"이라고합니다.

또한 Clock에 의해 생성 된 DOM이 제거 될 때마다 해당 타이머를 지우고 싶습니다. 이것을 React에서 "언 마운트"라고합니다.

컴포넌트가 마운트 및 마운트 해제 될 때 일부 코드를 실행하기 위해 컴포넌트 클래스에 특수 메서드를 선언 할 수 있습니다.

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```



이러한 메서드를 "라이프 사이클 메서드"라고합니다.

componentDidMount () 메서드는 구성 요소 출력이 DOM에 렌더링 된 후에 실행됩니다. 타이머를 설정하기에 좋은 곳입니다.

```javascript
componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
```



여기에 타이머 ID를 저장하는 방법에 유의하십시오.

this.props는 React 자체에 의해 설정되고 this.state는 특별한 의미를 갖지만 데이터 흐름에 참여하지 않는 항목 (예 : 타이머 ID)을 저장해야하는 경우 클래스에 수동으로 추가 필드를 추가 할 수 있습니다. ).

componentWillUnmount () 수명주기 메서드에서 타이머를 해체합니다.

```javascript
componentWillUnmount() {
    clearInterval(this.timerID);
  }
```



마지막으로, 우리는 Clock 컴포넌트가 매초 실행될 tick ()이라는 메소드를 구현할 것입니다.

this.setState ()를 사용하여 구성 요소 로컬 상태에 대한 업데이트를 예약합니다.

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```



이제 시계는 매초마다 똑딱 거리고 있습니다.

무슨 일이 일어나고 있는지 그리고 메서드가 호출되는 순서를 빠르게 요약 해 보겠습니다.

1. <Clock />이 ReactDOM.render ()에 전달되면 React는 Clock 컴포넌트의 생성자를 호출합니다. Clock은 현재 시간을 표시해야하므로 현재 시간을 포함하는 객체로 this.state를 초기화합니다. 나중에이 상태를 업데이트 할 것입니다.
2. 그런 다음 React는 Clock 구성 요소의 render () 메서드를 호출합니다. 이것이 React가 화면에 표시되어야하는 내용을 학습하는 방법입니다. 그런 다음 React는 Clock의 렌더링 출력과 일치하도록 DOM을 업데이트합니다.
3. Clock 출력이 DOM에 삽입되면 React는 componentDidMount () 라이프 사이클 메서드를 호출합니다. 내부에서 Clock 구성 요소는 브라우저에 구성 요소의 tick () 메서드를 1 초에 한 번 호출하도록 타이머를 설정하도록 요청합니다.
4. 브라우저는 매초마다 tick () 메서드를 호출합니다. 내부에서 Clock 구성 요소는 현재 시간이 포함 된 객체로 setState ()를 호출하여 UI 업데이트를 예약합니다. setState () 호출 덕분에 React는 상태가 변경되었음을 알고 화면에 무엇이 표시되어야하는지 알아보기 위해 render () 메서드를 다시 호출합니다. 이번에는 render () 메서드의 this.state.date가 다르므로 렌더링 출력에 업데이트 된 시간이 포함됩니다. React는 그에 따라 DOM을 업데이트합니다.
5. Clock 컴포넌트가 DOM에서 제거되면 React는 componentWillUnmount () 라이프 사이클 메소드를 호출하여 타이머가 중지됩니다.
