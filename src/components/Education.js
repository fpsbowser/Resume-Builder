import React, { Component } from 'react';

class Education extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       course: this.props.course,
  //       university: this.props.university,
  //       start: this.props.start,
  //       end: this.props.end,
  //       description: this.props.description,
  //     };
  //   }

  render() {
    const { course, university, start, end } = this.props;

    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Course / Program"
            value={course}
            name="course"
            onChange={this.props.handlechange}
          />
          <input
            type="text"
            placeholder="University"
            value={university}
            name="university"
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
          <button>Delete</button>
        </form>
      </div>
    );
  }
}

export default Education;
