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
      <div className="form-row">
        <div className=" col-md-4">
          <input className="form-control" placeholder={this.props.listIndex} />
        </div>

        <div className="col-md-3">
          <input className="form-control" />
        </div>

        <div className="col-md-3">
          <select className="form-control" defaultValue="Bi-Monthly">
            <option value="Monthly">Monthly</option>
            <option value="Bi-Monthly">Bi-Monthly</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-danger form-control form-group"
            type="button"
            onClick={this.props.onDelete}
            tabIndex="-1"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Entry;
