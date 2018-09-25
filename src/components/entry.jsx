import React, { Component } from "react";

class Entry extends Component {
  render() {
    return (
      <div>
        <form className="form-inline mt-2 ml-4">
          <em>{this.props.listIndex}.</em>
          <div className="ml-2 mb-2 mr-2">
            <input
              className="form-control"
              type="text"
              placeholder="Bill"
              // value={this.props.counter.name}
              onChange={e =>
                this.props.onChangeForm(e.target.value, e.target.placeholder)
              }
              onBlur={e =>
                this.props.onChangeForm(e.target.value, e.target.placeholder)
              }
            />
          </div>
          <div className="form-group mb-2 mr-2">
            <input
              className="form-control"
              type="text"
              placeholder="Cost"
              // value={this.props.counter.name}
              onChange={e =>
                this.props.onChangeForm(e.target.value, e.target.placeholder)
              }
              onBlur={e =>
                this.props.onChangeForm(e.target.value, e.target.placeholder)
              }
            />
          </div>
          <div className="form-group mb-2">
            <button
              onClick={this.props.onDelete}
              className="btn btn-danger btn-sm"
              tabIndex="-1"
            >
              Delete
            </button>
          </div>
        </form>
        <div className="col-sm" />
      </div>
    );
  }
}

export default Entry;
