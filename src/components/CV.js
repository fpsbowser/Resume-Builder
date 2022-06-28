import React, { Component } from 'react';
// import Information from './Information';

class CV extends Component {
  render() {
    console.log(this.props);
    const information = this.props.props.information;
    const experiences = this.props.props.experience;
    const education = this.props.props.education;
    console.log(experiences);
    return (
      <div>
        <div className="header-container">
          <div className="header">
            <h1 id="name">{information.name}</h1>
            <h2 id="title">{information.title}</h2>
          </div>
          <div className="contact-information">
            <p id="phone">{information.phone}</p>
            <p id="email">{information.email}</p>
            <p id="location">{information.location}</p>
          </div>
          <div id="user-description">{information.description}</div>
        </div>
        <div className="experience-container">
          <h3 id="experience-header">Experience</h3>
          {experiences.map((el) => {
            return (
              <div key={el.id} id={'experience'}>
                <p id="company" name={'company'}>
                  {el.company}
                </p>
                <p id="position" name={'position'}>
                  {el.position}
                </p>
                <p id="start" name={'start'}>
                  {el.start}
                </p>
                <p id="end" name={'end'}>
                  {el.end}
                </p>
                <p id="description" name={'description'}>
                  {el.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="education-container">
          <h3 id="education-header">Education</h3>
          {education.map((el) => {
            return (
              <div key={el.id} id={'education'}>
                <p id="course" name={'course'}>
                  {el.course}
                </p>
                <p id="university" name={'university'}>
                  {el.university}
                </p>
                <p id="start" name={'start'}>
                  {el.start}
                </p>
                <p id="end" name={'end'}>
                  {el.end}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CV;
