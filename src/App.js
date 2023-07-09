import React, { Component } from 'react';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      oddNumberList: [],
      evenNumberList: [],
      perfectSquareList: [],
    };
  }

  componentDidMount() {
    this.createListBasedOnNumber();
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      this.createListBasedOnNumber();
    });
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 }, () => {
      this.createListBasedOnNumber();
    });
  };

  createListBasedOnNumber = () => {
    let oddNumberListArray = this.state.oddNumberList;
    let evenNumberListArray = this.state.evenNumberList;
    let perfectSquareListArray = this.state.perfectSquareList;
    let removeDuplicatesFromOdd = [];
    let removeDuplicatesFromEven = [];
    let removeDuplicatesFromPerfectSquare = [];

    let squareRootOfNumber = Math.sqrt(this.state.counter);
    if (Number.isInteger(squareRootOfNumber)) {
      perfectSquareListArray.push(this.state.counter);
      removeDuplicatesFromPerfectSquare = perfectSquareListArray.filter(
        (list, index) => {
          return perfectSquareListArray.indexOf(list) === index;
        }
      );
      this.setState({ perfectSquareList: removeDuplicatesFromPerfectSquare });
    }

    if (Math.abs(this.state.counter) % 2 === 1) {
      oddNumberListArray.push(this.state.counter);
      removeDuplicatesFromOdd = oddNumberListArray.filter((list, index) => {
        return oddNumberListArray.indexOf(list) === index;
      });
      this.setState({ oddNumberList: removeDuplicatesFromOdd });
    } else if (Math.abs(this.state.counter) % 2 === 0) {
      evenNumberListArray.push(this.state.counter);
      removeDuplicatesFromEven = evenNumberListArray.filter((list, index) => {
        return evenNumberListArray.indexOf(list) === index;
      });
      this.setState({ evenNumberList: removeDuplicatesFromEven });
    }
  };

  render() {
    return (
      <div>
        <h2>Counter component using class component</h2>
        <div className="counter">
          <button
            className="counter__btn counter__btn--increment"
            onClick={this.handleIncrement}
          >
            +
          </button>
          <div className="counter__display">{this.state.counter}</div>
          <button
            className="counter__btn counter__btn--decrement"
            onClick={this.handleDecrement}
          >
            -
          </button>
        </div>

        <div>
          <h4>Odd numbers: </h4>
          <li className="display-list">
            {this.state.oddNumberList.length
              ? this.state.oddNumberList.join(', ')
              : '-'}
          </li>
          <h4>Even numbers: </h4>
          <li className="display-list">
            {this.state.evenNumberList.length
              ? this.state.evenNumberList.join(', ')
              : '-'}
          </li>
          <h4>Perfect Square numbers: </h4>
          <li className="display-list">
            {this.state.perfectSquareList.length
              ? this.state.perfectSquareList.join(', ')
              : '-'}
          </li>
        </div>
      </div>
    );
  }
}

export default App;
