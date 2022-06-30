import React, { Component } from 'react';
import '../styles/Information.css';

class Information extends Component {
  handlechange(e) {
    this.props.handlechange(e, 'information');
  }

  render() {
    const { name, title, phone, email, location, description } = this.props;
    return (
      <div className="informations-container">
        <div className="information-inputs">
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <input
            id="user-test-d"
            name="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Information;
