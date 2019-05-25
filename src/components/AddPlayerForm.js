import React from 'react';

export class AddPlayerForm extends React.Component {

  state = {
    value: ''
  }

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.setState({value:e.target.value})
  }

  handleSubmit = (e) => {
    //1. 기본 이벤트 막기(새로고침)
    e.preventDefault();
    //2. 이벤트 전파 막기(submit onClick시 주로 발생)
    e.stopPropagation();
    this.props.addPlayer(this.state.value);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" value={this.state.value} onChange={this.handleChange}></input>
        <input type="submit" value="Add Player"></input>
      </form>
    );
  }
}