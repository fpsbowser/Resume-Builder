import React, { Component } from 'react';
// import Information from './Information';

class CV extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header">
            <h1 id="name">{this.props.name}</h1>
            <h2 id="title">{this.props.title}</h2>
          </div>
          <div className="contact-information">
            <p id="phone">{this.props.phone}</p>
            <p id="email">{this.props.email}</p>
            <p id="location">{this.props.location}</p>
          </div>
          <div id="user-description">{this.props.description}</div>
        </div>
        <div className="experience-container">
          <h3 id="experience-header">Experience</h3>
          <p id="company">{this.props.company}</p>
          <p id="position">{this.props.position}</p>
          <p id="start">{this.props.start}</p>
          <p id="end">{this.props.end}</p>
          <p id="exprience-description">{this.props.experienceDescription}</p>
        </div>
        <div className="education-container">
          <h3 id="education-header">Education</h3>
          <p id="course">{this.props.course}</p>
          <p id="university">{this.props.university}</p>
          <p id="eduStart">{this.props.eduStart}</p>
          <p id="eduEnd">{this.props.eduEnd}</p>
          <p id="eduDescription">{this.props.eduDescription}</p>
        </div>
      </div>
    );
  }
}

export default CV;
