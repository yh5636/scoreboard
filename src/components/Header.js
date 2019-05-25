import React from 'react';
import {Statistics} from "./Statistics";

export const Header = (props) => {
  console.log(props);
  // destruct assignment
  const {title, totalPlayers} = props;
  return (
    <header>
      <Statistics players={props.players}/>
      <h1>{title}</h1>
    </header>
  );
}