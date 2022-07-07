import React from 'react';
import '../styles/Information.css';

const Information = (props) => {
  function handlechange(e) {
    props.handlechange(e);
  }

  return (
    <div className='informations-container'>
      <div className='information-inputs'>
        <input
          name='name'
          type='text'
          placeholder='Name'
          value={props.name}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <input
          name='title'
          type='text'
          placeholder='Title'
          value={props.title}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <input
          name='phone'
          type='tel'
          placeholder='Phone'
          value={props.phone}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={props.email}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <input
          name='location'
          type='text'
          placeholder='Location'
          value={props.location}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <input
          name='description'
          type='text'
          placeholder='Description'
          value={props.description}
          onChange={(e) => {
            handlechange(e);
          }}
        />
      </div>
    </div>
  );
};

export default Information;
