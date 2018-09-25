import React, { Component } from "react";
import Entry from "./entry";

class Entries extends Component {
  constructor() {
    super();
    this.state.counterLen = this.state.counters.length;
  }

  state = {
    counters: [{ id: 1, value: 0 }],
    counterLen: 0
  };

  handleAdd = () => {
    const counters = [...this.state.counters];
    const counterLen = this.state.counterLen + 1;
    this.setState({ counterLen: counterLen });
    this.setState({
      counters: counters.concat({
        id: counterLen,
        value: 0
      })
    });
  };

  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-success m-2">
          Reset
        </button>
        <button onClick={this.handleAdd} className="btn btn-primary m-2">
          Add element
        </button>
        {this.state.counters.map(counter => (
          <div key={counter.id} className="counter">
            <h4>{this.state.counters.indexOf(counter) + 1}</h4>
            <Entry
              counter={counter} // encapsulation
              onDelete={() => this.handleDelete(counter)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Entries;
