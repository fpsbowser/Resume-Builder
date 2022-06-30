import React, { Component } from 'react';
import '../styles/Experience.css';

class Experience extends Component {
  removeExperience(experience) {
    this.props.handledelete(experience, 'experience');
  }

  addExperience() {
    this.props.add('experience');
  }

  handlechange(e, index) {
    this.props.handlechange(e, 'experience', index);
  }

  render() {
    return (
      <div className="experiences-container">
        {this.props.experiences.map((el) => {
          return (
            <div key={el.id} className={'experience-inputs'}>
              <input
                value={el.company}
                name={'company'}
                placeholder={'Company'}
                onChange={(e) => {
                  this.handlechange(e, el.company);
                }}
              />
              <input
                value={el.position}
                name={'position'}
                placeholder={'Position'}
                onChange={(e) => {
                  this.handlechange(e, el.company);
                }}
              />
              <input
                value={el.start}
                name={'start'}
                placeholder={'Start'}
                onChange={(e) => {
                  this.handlechange(e, el.company);
                }}
              />
              <input
                value={el.end}
                name={'end'}
                placeholder={'End'}
                onChange={(e) => {
                  this.handlechange(e, el.company);
                }}
              />
              <input
                id="description-input"
                value={el.description}
                name={'description'}
                placeholder={'Description'}
                onChange={(e) => {
                  this.handlechange(e, el.company);
                }}
              />
              <button
                id="delete-btn"
                onClick={() => {
                  this.removeExperience(el);
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

export default Experience;
