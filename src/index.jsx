import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleButtonClick = () => {
    const newName = 'Nika Abashishvili';
    this.setState({ name: newName });
    alert(`Name: ${newName}`);
  };

  render() {
    return (
      <>
        <p>Click Me</p>
        <button onClick={this.handleButtonClick}>Name</button>
      </>
    );
  }
}

export default App;

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);