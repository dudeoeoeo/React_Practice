/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Component } from 'react';
import './App.css';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';
import EventPractice from './EventPractice';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import MyComponent from './MyComponent';
import Say from './Say';
import ScrollBox from './ScrollBox';
import Validation from './Validation';

{
  /* 
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };
  return (
    <>
      <h1>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </h1>
    </>
  );
}
*/
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };
  handleClick = () => {
    this.setState({ color: getRandomColor() });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
