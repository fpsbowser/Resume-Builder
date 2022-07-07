import React, { useState } from 'react';
import CV from './components/CV';
import Education from './components/Education';
import Experience from './components/Experience';
import Information from './components/Information';
import uniqid from 'uniqid';
import './styles/App.css';

const App = () => {
  const initialState = {
    information: {
      name: 'Billy Bob',
      title: 'Software Engineer',
      phone: '555-777-2022',
      email: 'bobbybill@gmail.gov',
      location: 'Varrock, Gielinor',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem facere nesciunt consectetur provident porro explicabo. Quidem inventore cum ab modi quo aperiam, animi exercitationem veritatis dolorem non veniam quia! Eius facilis ipsum placeat laboriosam, alias pariatur ipsa molestias esse eos consectetur, eaque delectus dignissimos doloremque provident sint! Illo vel dolores obcaecati nesciunt aspernatur aliquam iste pariatur. Totam, dolorum corrupti.',
    },
    experience: [
      {
        id: `${uniqid()}`,
        company: 'A software Company',
        position: 'Software Engineer',
        start: '2021',
        end: 'Present',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam rem eos placeat doloribus deleniti sit!',
      },
      {
        id: `${uniqid()}`,
        company: 'My First Company',
        position: 'Graduate Engineer',
        start: '2018',
        end: '2020',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem facere nesciunt consectetur provident porro explicabo. Voluptate nam rem eos placeat doloribus deleniti sit!',
      },
      {
        id: `${uniqid()}`,
        company: 'University',
        position: 'Tutor',
        start: '2016',
        end: '2018',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam rem eos placeat doloribus deleniti sit! Totam, dolorum corrupti.',
      },
    ],
    education: [
      {
        id: `${uniqid()}`,
        course: 'Fullstack JavaScript',
        university: 'The Odin Project',
        start: '2020',
        end: '2021',
        description: '',
      },
      {
        id: `${uniqid()}`,
        course: 'CS50: Intro to Computer Science',
        university: 'Harvard University',
        start: '2019',
        end: '2020',
        description: '',
      },
    ],
  };

  const [information, setInformation] = useState(initialState.information);
  const [experience, setExperience] = useState(initialState.experience);
  const [education, setEducation] = useState(initialState.education);

  function handlechangeInfo(e) {
    const { name, value } = e.target;
    setInformation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handlechangeExperience(e, oldValue) {
    const { name, value } = e.target;
    setExperience(
      [...experience].map((obj) => {
        if (obj.company === oldValue) {
          return {
            ...obj,
            [name]: value,
          };
        } else {
          return obj;
        }
      })
    );
  }

  function handlechangeEducation(e, oldValue) {
    const { name, value } = e.target;
    setEducation(
      [...education].map((obj) => {
        if (obj.course === oldValue) {
          return {
            ...obj,
            [name]: value,
          };
        } else {
          return obj;
        }
      })
    );
  }

  function handleDeleteClick(div, type) {
    if (type === 'experience') {
      setExperience((experience) => experience.filter((el) => el !== div));
    } else if (type === 'education') {
      setEducation((experience) => experience.filter((el) => el !== div));
    }
  }

  function addInputs(type) {
    if (type === 'experience') {
      console.log('ADD');
      setExperience(
        experience.concat({
          id: `${uniqid()}`,
          company: '',
          position: '',
          start: '',
          end: '',
          description: '',
        })
      );
    } else if (type === 'education') {
      setEducation(
        education.concat({
          id: `${uniqid()}`,
          course: '',
          university: '',
          start: '',
          end: '',
        })
      );
    }
  }

  return (
    <div>
      <div className='main-container'>
        <div className='builder-container'>
          <div className='information-container'>
            <h2 id='information-header'>Personal Details</h2>
            <Information
              name={information.name}
              title={information.title}
              phone={information.phone}
              email={information.email}
              location={information.location}
              description={information.description}
              handlechange={handlechangeInfo}
            />
          </div>
          <div className='experience-container'>
            <h2 id='experience-header'>Work Experience</h2>
            <button
              id='add-btn'
              onClick={() => {
                addInputs('experience');
              }}
            >
              Add
            </button>
            <Experience
              experiences={experience}
              handlechange={handlechangeExperience}
              handledelete={handleDeleteClick}
            />
          </div>
          <div className='education-container'>
            <h2 id='education-header'>Education</h2>
            <button
              id='add-btn'
              onClick={() => {
                addInputs('education');
              }}
            >
              Add
            </button>
            <Education
              educations={education}
              handlechange={handlechangeEducation}
              handledelete={handleDeleteClick}
            />
          </div>
        </div>
        <div className='rendered-container'>
          <CV
            information={information}
            experience={experience}
            education={education}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
