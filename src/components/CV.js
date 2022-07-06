import React from 'react';
import '../styles/CV.css';

const CV = (props) => {
  const information = props.props.information;
  const experiences = props.props.experience;
  const education = props.props.education;
  return (
    <div className="rendered-resume">
      <div className="rendered-header-container">
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
      <div className="rendered-experience-container">
        <h3 id="rendered-experience-header">Work Experience</h3>
        {experiences.map((el) => {
          return (
            <div key={el.id} id={'experience'}>
              <div>
                <p name={'position'}>{el.position}</p>
              </div>
              <div className="experience-info">
                <p id="company" name={'company'}>
                  {el.company} |
                </p>
                <p id="exp-start" name={'start'}>
                  {el.start}-
                </p>
                <p id="exp-end" name={'end'}>
                  {el.end}
                </p>
              </div>
              <div id="description-box">
                <p id="description" name={'description'}>
                  {el.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="rendered-education-container">
        <h3 id="rendered-education-header">Education</h3>
        {education.map((el) => {
          return (
            <div key={el.id} id={'education'}>
              <div>
                <p id="course" name={'course'}>
                  {el.course}
                </p>
              </div>
              <div className="education-info">
                <p id="university" name={'university'}>
                  {el.university} | &nbsp;
                </p>
                <p id="edu-start" name={'start'}>
                  {el.start}-
                </p>
                <p id="edu-end" name={'end'}>
                  {el.end}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/*
class CV extends Component {
  render() {
    console.log(this.props);
    const information = this.props.props.information;
    const experiences = this.props.props.experience;
    const education = this.props.props.education;
    console.log(experiences);
    return (
      <div className="rendered-resume">
        <div className="rendered-header-container">
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
        <div className="rendered-experience-container">
          <h3 id="rendered-experience-header">Work Experience</h3>
          {experiences.map((el) => {
            return (
              <div key={el.id} id={'experience'}>
                <div>
                  <p name={'position'}>{el.position}</p>
                </div>
                <div className="experience-info">
                  <p id="company" name={'company'}>
                    {el.company} |
                  </p>
                  <p id="exp-start" name={'start'}>
                    {el.start}-
                  </p>
                  <p id="exp-end" name={'end'}>
                    {el.end}
                  </p>
                </div>
                <div id="description-box">
                  <p id="description" name={'description'}>
                    {el.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="rendered-education-container">
          <h3 id="rendered-education-header">Education</h3>
          {education.map((el) => {
            return (
              <div key={el.id} id={'education'}>
                <div>
                  <p id="course" name={'course'}>
                    {el.course}
                  </p>
                </div>
                <div className="education-info">
                  <p id="university" name={'university'}>
                    {el.university} | &nbsp;
                  </p>
                  <p id="edu-start" name={'start'}>
                    {el.start}-
                  </p>
                  <p id="edu-end" name={'end'}>
                    {el.end}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
*/
export default CV;
