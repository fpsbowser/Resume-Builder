import React from 'react';
import '../styles/Education.css';

const Education = (props) => {
  function removeEducation(education) {
    props.handledelete(education, 'education');
  }

  function handlechange(e, oldValue) {
    props.handlechange(e, oldValue);
  }

  return (
    <div className='educations-container'>
      {props.educations.map((el) => {
        return (
          <div key={el.id} className={'education-inputs'}>
            <input
              value={el.course}
              name={'course'}
              placeholder={'Course'}
              onChange={(e) => {
                handlechange(e, el.course);
              }}
            />
            <input
              value={el.university}
              name={'university'}
              placeholder={'University'}
              onChange={(e) => {
                handlechange(e, el.course);
              }}
            />
            <input
              value={el.start}
              name={'start'}
              placeholder={'Start'}
              onChange={(e) => {
                handlechange(e, el.course);
              }}
            />
            <input
              value={el.end}
              name={'end'}
              placeholder={'End'}
              onChange={(e) => {
                handlechange(e, el.course);
              }}
            />
            <button
              onClick={() => {
                removeEducation(el);
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

export default Education;
