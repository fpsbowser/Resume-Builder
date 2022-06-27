import React, { Component } from 'react';
import CV from './components/CV';
import Education from './components/Education';
import Experience from './components/Experience';
import Information from './components/Information';

class App extends Component {
  constructor() {
    super();
    this.state = {
      information: {
        name: 'Billy Bob',
        title: 'Software Engineer',
        phone: '555-777-2022',
        email: 'bobbybill@gmail.gov',
        location: 'Varrock, Gielinor',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, beatae hic! Ad eveniet ea earum placeat quos, officiis dolorem soluta excepturi debitis velit itaque harum ullam obcaecati non quod error nemo. Totam exercitationemut officiis sed!',
      },
      experience: [
        {
          company: 'A software Company',
          position: 'Software Engineer',
          start: '2021',
          end: 'Present',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam rem eos placeat doloribus deleniti sit!',
        },
        {
          company: 'My First Company',
          position: 'Graduate Engineer',
          start: '2018',
          end: '2020',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam rem eos placeat doloribus deleniti sit!',
        },
        {
          company: 'University',
          position: 'Tutor',
          start: '2016',
          end: '2018',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam rem eos placeat doloribus deleniti sit!',
        },
      ],
      education: [
        {
          course: 'Fullstack JavaScript',
          university: 'The Odin Project',
          start: '2020',
          end: '2021',
          description: '',
        },
        {
          course: 'CS50: Introduction to Computer Science',
          university: 'Harvard University',
          start: '2019',
          end: '2020',
          description: '',
        },
      ],
    };
    this.informationHandlechange = this.informationHandlechange.bind(this);
    this.experienceHandlechange = this.experienceHandlechange.bind(this);
    this.educationHandlechange = this.educationHandlechange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.addInputs = this.addInputs.bind(this);
  }

  handleDeleteClick(div, type) {
    if (type === 'experience') {
      this.setState({
        experience: this.state.experience.filter((el) => el !== div),
      });
    } else if (type === 'education') {
      this.setState({
        education: this.state.education.filter((el) => el !== div),
      });
    }
  }

  addInputs(type) {
    if (type === 'experience') {
      console.log(this.state.experience);
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
    } else if (type === 'education') {
      this.setState((prevState) => ({
        education: [
          ...prevState.education,
          {
            course: '',
            university: '',
            start: '',
            end: '',
          },
        ],
      }));
    }
  }

  informationHandlechange(e) {
    const value = e.target.value;
    this.setState((prevState) => ({
      information: {
        ...prevState.information,
        [e.target.name]: value,
      },
    }));
    // console.table(this.state);
    console.log(e);
  }

  experienceHandlechange(e) {
    const value = e.target.value;
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        [e.target.name]: value,
      },
    }));
    console.table(this.state);
  }

  educationHandlechange(e) {
    const value = e.target.value;
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [e.target.name]: value,
      },
    }));
    console.table(this.state);
  }

  render() {
    return (
      <div>
        <div className="main-container">
          <div className="builder-container">
            <h2>Personal Details</h2>
            <Information
              name={this.state.information.name}
              title={this.state.information.title}
              phone={this.state.information.phone}
              email={this.state.information.email}
              location={this.state.information.location}
              description={this.state.information.description}
              handlechange={this.informationHandlechange}
            />
            <h2>Work Experience</h2>
            <Experience
              experiences={this.state.experience}
              handlechange={this.experienceHandlechange}
              handledelete={this.handleDeleteClick}
              add={this.addInputs}
            />
            <h2>Education</h2>
            <Education
              educations={this.state.education}
              handlechange={this.educationHandlechange}
              handledelete={this.handleDeleteClick}
              add={this.addInputs}
            />
          </div>
          <div className="rendered-container">
            <CV
              name={this.state.information.name}
              title={this.state.information.title}
              phone={this.state.information.phone}
              email={this.state.information.email}
              location={this.state.information.location}
              description={this.state.information.description}
              company={this.state.experience.company}
              position={this.state.experience.position}
              start={this.state.experience.start}
              end={this.state.experience.end}
              experienceDescription={this.state.experience.description}
              handlechange={this.experienceHandlechange}
              course={this.state.education.course}
              university={this.state.education.university}
              eduStart={this.state.education.start}
              eduEnd={this.state.education.end}
              eduDescription={this.state.education.description}
              eduHandlechange={this.educationHandlechange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
