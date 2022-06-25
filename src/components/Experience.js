import React, { Component } from 'react';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: [props.props[0], props.props[1], props.props[2]],
    };
    this.addInputs = this.addInputs.bind(this);
  }

  addInputs() {
    this.setState((prevState) => ({
      experience: [
        ...prevState.experience,
        {
          company: '',
          position: '',
          start: '',
          end: '',
          description: '',
        },
      ],
    }));
  }

  render() {
    // const { company, position, start, end, description } = this.props;
    return (
      <div>
        <button onClick={this.addInputs}>Add</button>
        {this.state.experience.map((el) => {
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
            </div>
          );
        })}
        <button onClick={this.props.handledelete}>Delete</button>
      </div>
    );
  }
}

export default Experience;
