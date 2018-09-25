import React, { Component } from "react";

class Entry extends Component {
  render() {
    return (
      <div>
        <form className="form-inline mt-2 ml-4">
          <div className="mb-2 mr-2">
            <input
              className="form-control"
              type="text"
              placeholder="Default input"
            />
          </div>
          <div className="form-group mb-2 mr-2">
            <input
              className="form-control"
              type="text"
              placeholder="Default input"
            />
          </div>
          <div className="form-group mb-2">
            <button
              onClick={this.props.onDelete}
              className="btn btn-danger btn-sm "
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
