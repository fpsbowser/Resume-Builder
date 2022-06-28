import React, { Component } from 'react';

class Education extends Component {
  removeEducation(education) {
    this.props.handledelete(education, 'education');
  }

  addEducation() {
    this.props.add('education');
  }

  handlechange(e, index) {
    this.props.handlechange(e, 'education', index);
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
            <div key={el.id}>
              <input
                value={el.course}
                name={'course'}
                placeholder={'Course'}
                onChange={(e) => {
                  this.handlechange(e, el.course);
                }}
              />
              <input
                value={el.university}
                name={'university'}
                placeholder={'University'}
                onChange={(e) => {
                  this.handlechange(e, el.course);
                }}
              />
              <input
                value={el.start}
                name={'start'}
                placeholder={'Start'}
                onChange={(e) => {
                  this.handlechange(e, el.course);
                }}
              />
              <input
                value={el.end}
                name={'end'}
                placeholder={'End'}
                onChange={(e) => {
                  this.handlechange(e, el.course);
                }}
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
