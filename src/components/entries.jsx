import React, { Component } from "react";
import Entry from "./entry";

class Entries extends Component {
  constructor() {
    super();
    this.state.counterLen = this.state.counters.length;
  }

  state = {
    counters: [{ id: 1, name: "", value: 0 }],
    counterLen: 0
  };

  handleAdd = () => {
    const counters = [...this.state.counters];
    const counterLen = this.state.counterLen + 1;
    this.setState({ counterLen: counterLen });
    this.setState({
      counters: counters.concat({
        id: counterLen,
        name: "",
        value: 0
      })
    });
  };

  handleReset = () => {
    let counters = [...this.state.counters];
    counters = [{ id: 1, name: "Food", value: 120 }];
    this.setState({ counters });
  };

  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters });
  };

  handleChangeForm = (eValue, ePlace, counter) => {
    const counters = [...this.state.counters].map(c => {
      if (ePlace === "Bill") return { ...c, name: eValue };
      else if (ePlace === "Cost") return { ...c, value: parseFloat(eValue) };
      return c;
    });
    console.log(ePlace, eValue, counter);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-success m-2"
          tabIndex="-1"
        >
          Reset
        </button>
        <button
          onClick={this.handleAdd}
          className="btn btn-primary m-2"
          tabIndex="-1"
        >
          Add element
        </button>
        {this.state.counters.map(counter => (
          <div key={counter.id} className="counter">
            <Entry
              counter={counter} // encapsulation
              listIndex={this.state.counters.indexOf(counter) + 1}
              onDelete={() => this.handleDelete(counter)}
              onChangeForm={(eValue, ePlace) =>
                this.handleChangeForm(eValue, ePlace, counter)
              }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Entries;
