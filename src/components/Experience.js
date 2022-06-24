import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { experience: [{}, {}, {}] };
  }

  addInputs() {}

  render() {
    const { company, position, start, end, description } = this.props;
    return (
      <div>
        <button onClick={this.addInputs}>Add</button>
        <form>
          <input
            type="text"
            placeholder="Company"
            value={company}
            name="company"
            onChange={this.props.handlechange}
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            name="position"
            onChange={this.props.handlechange}
          />
          <input
            type="text"
            placeholder="Start Date"
            value={start}
            name="start"
            onChange={this.props.handlechange}
          />
          <input
            type="text"
            placeholder="End Date"
            value={end}
            name="end"
            onChange={this.props.handlechange}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            name="description"
            onChange={this.props.handlechange}
          />
          <button onClick={this.props.handledelete}>Delete</button>
        </form>
      </div>
    );
  }
}

export default Experience;
