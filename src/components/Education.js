import React, { Component } from 'react';
import '../styles/Education.css';

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
      <div className="educations-container">
        {this.props.educations.map((el) => {
          return (
            <div key={el.id} className={'education-inputs'}>
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
