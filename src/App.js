import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function makeSections(ary) {
  return ary.map(sec => {
    let paragraphs = sec.items.map(prg => <p>{prg}</p>);
    return (
      <section>
        <h2>{sec.head}</h2>
        {paragraphs}
      </section>
    )
  });
}

class App extends Component {
  render() {
    const DB = window.DB;
    const pageHead = DB.head;
    const sections = makeSections(DB.sections);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{pageHead}</h1>
        </div>
        <p className="App-intro">
          {sections}
        </p>
      </div>
    );
  }
}

export default App;
