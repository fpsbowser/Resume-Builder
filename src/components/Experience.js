import React from 'react';
import '../styles/Experience.css';

const Experience = (props) => {
  function removeExperience(experience) {
    props.handledelete(experience, 'experience');
  }

  function handlechange(e, index) {
    props.handlechange(e, 'experience', index);
  }

  return (
    <div className="experiences-container">
      {props.experiences.map((el) => {
        return (
          <div key={el.id} className={'experience-inputs'}>
            <input
              value={el.company}
              name={'company'}
              placeholder={'Company'}
              onChange={(e) => {
                handlechange(e, el.company);
              }}
            />
            <input
              value={el.position}
              name={'position'}
              placeholder={'Position'}
              onChange={(e) => {
                handlechange(e, el.company);
              }}
            />
            <input
              value={el.start}
              name={'start'}
              placeholder={'Start'}
              onChange={(e) => {
                handlechange(e, el.company);
              }}
            />
            <input
              value={el.end}
              name={'end'}
              placeholder={'End'}
              onChange={(e) => {
                handlechange(e, el.company);
              }}
            />
            <input
              id="description-input"
              value={el.description}
              name={'description'}
              placeholder={'Description'}
              onChange={(e) => {
                handlechange(e, el.company);
              }}
            />
            <button
              id="delete-btn"
              onClick={() => {
                removeExperience(el);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
