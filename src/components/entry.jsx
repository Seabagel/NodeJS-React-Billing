import React, { Component } from "react";

class Entry extends Component {
  styles = {
    auto: {
      margin: "0 auto",
      width: "100%"
    }
  };

  render() {
    return (
      <form className="form-inline m-3 ">
        <div style={this.styles.auto}>
          <h5>{this.props.listIndex}:</h5>
          <input
            className="ml-1 mb-2 form-control"
            type="text"
            placeholder="Bill"
            // value={this.props.counter.name}
            onBlur={e =>
              this.props.onChangeForm(e.target.value, e.target.placeholder)
            }
          />
          <input
            className="ml-1 mb-2 form-control"
            type="text"
            placeholder="Cost"
            // value={this.props.counter.name}
            onBlur={e =>
              this.props.onChangeForm(e.target.value, e.target.placeholder)
            }
          />
          <button
            type="button"
            onClick={this.props.onDelete}
            className="btn btn-danger ml-1 mb-2 form-control"
            tabIndex="-1"
          >
            Delete
          </button>
        </div>
      </form>
    );
  }
}

export default Entry;
