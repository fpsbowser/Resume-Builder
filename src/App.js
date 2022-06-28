import React, { Component } from 'react';
import CV from './components/CV';
import Education from './components/Education';
import Experience from './components/Experience';
import Information from './components/Information';
import uniqid from 'uniqid';

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
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam rem eos placeat doloribus deleniti sit!',
        },
        {
          id: `${uniqid()}`,
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
          id: `${uniqid()}`,
          course: 'Fullstack JavaScript',
          university: 'The Odin Project',
          start: '2020',
          end: '2021',
          description: '',
        },
        {
          id: `${uniqid()}`,
          course: 'CS50: Introduction to Computer Science',
          university: 'Harvard University',
          start: '2019',
          end: '2020',
          description: '',
        },
      ],
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.addInputs = this.addInputs.bind(this);
  }

  handlechange(e, type, index) {
    if (type === 'information') {
      const value = e.target.value;
      this.setState((prevState) => ({
        information: {
          ...prevState.information,
          [e.target.name]: value,
        },
      }));
    } else if (type === 'experience') {
      const value = e.target.value;
      console.log(index);
      this.setState((prevState) => ({
        experience: prevState.experience.map((obj) =>
          obj.company === index
            ? Object.assign(obj, { [e.target.name]: value })
            : obj
        ),
      }));
    } else if (type === 'education') {
      const value = e.target.value;
      console.log(index);
      this.setState((prevState) => ({
        education: prevState.education.map((obj) =>
          obj.course === index
            ? Object.assign(obj, { [e.target.name]: value })
            : obj
        ),
      }));
    }
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
            id: `${uniqid()}`,
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
            id: `${uniqid()}`,
            course: '',
            university: '',
            start: '',
            end: '',
          },
        ],
      }));
    }
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
              handlechange={this.handlechange}
            />
            <h2>Work Experience</h2>
            <Experience
              experiences={this.state.experience}
              handlechange={this.handlechange}
              handledelete={this.handleDeleteClick}
              add={this.addInputs}
            />
            <h2>Education</h2>
            <Education
              educations={this.state.education}
              handlechange={this.handlechange}
              handledelete={this.handleDeleteClick}
              add={this.addInputs}
            />
          </div>
          <div className="rendered-container">
            <CV props={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
