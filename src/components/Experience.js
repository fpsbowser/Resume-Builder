import React, { Component } from 'react';
import uniqid from 'uniqid';

class Experience extends Component {
  removeExperience(experience) {
    this.props.handledelete(experience, 'experience');
  }

  addExperience() {
    this.props.add('experience');
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
            <div key={uniqid()}>
              <input
                value={el.company}
                name={'company'}
                placeholder={'Company'}
                onChange={this.props.handlechange}
              />
              <input
                value={el.position}
                name={'position'}
                placeholder={'Position'}
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
              <input
                value={el.description}
                name={'description'}
                placeholder={'Description'}
                onChange={this.props.handlechange}
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
