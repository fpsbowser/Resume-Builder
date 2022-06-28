import React, { Component } from 'react';

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
      <div>
        <button
          onClick={() => {
            this.addExperience();
          }}
        >
          Add
        </button>
        {this.props.experiences.map((el) => {
          return (
            <div key={el.id}>
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
                value={el.description}
                name={'description'}
                placeholder={'Description'}
                onChange={(e) => {
                  this.handlechange(e, el.company);
                }}
              />
              <button
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
