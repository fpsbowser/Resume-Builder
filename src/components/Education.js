import React, { Component } from 'react';
import uniqid from 'uniqid';

class Education extends Component {
  removeEducation(education) {
    this.props.handledelete(education, 'education');
  }

  addEducation() {
    this.props.add('education');
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.addEducation();
          }}
        >
          Add
        </button>
        {this.props.educations.map((el) => {
          return (
            <div key={uniqid()}>
              <input
                value={el.course}
                name={'course'}
                placeholder={'Course'}
                onChange={this.props.handlechange}
              />
              <input
                value={el.university}
                name={'university'}
                placeholder={'University'}
                onChange={this.props.handlechange}
              />
              <input
                value={el.start}
                name={'start'}
                placeholder={'Start'}
                onChange={this.props.handlechange}
              />
              <input
                value={el.end}
                name={'end'}
                placeholder={'End'}
                onChange={this.props.handlechange}
              />
              <button
                onClick={() => {
                  this.removeEducation(el);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
