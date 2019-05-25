import React from 'react';

export class Stopwatch extends React.Component {
  thickRef; //속성선언
  state = { //시간은 변하는 값이니까 state로
    timer : 0,
    isRunning : false
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>Start</button>
        <button>Reset</button>
      </div>
    );
  }

  // ★Dom이 렌더링된 직후에 호출되는 라이프 사이클
  // 주로 네트워크 호출, 3rd 라이브러리 로딩 등의 역할을 수행
    componentDidMount() {
      this.thickRef = setInterval(this.thickRef, 1000);

  }

  // ★DOM이 파괴되기 직전에 호출되는 라이프 사이클
  // 리소스 해제 등의 역할을 수행
  componentWillUnmount(){
    clearInterval(this.thickRef);
  }

  tick(){
    if (this.state.isRunning){
      this.setState(prevState => ({
        timer: prevState.timer +1
      }))
    }
  }
  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
      })
    );
  }

}