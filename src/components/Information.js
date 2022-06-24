import React, { Component } from 'react';

class Information extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       name: 'Billy Bob',
  //       title: 'Software Engineer',
  //       phone: '555-777-2022',
  //       email: 'bobbybill@gmail.gov',
  //       location: 'Varrock, Gielinor',
  //       description:
  //         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, beatae hic! Ad eveniet ea earum placeat quos, officiis dolorem soluta excepturi debitis velit itaque harum ullam obcaecati non quod error nemo. Totam exercitationemut officiis sed!',
  //     };
  //     this.handlechange = this.handlechange.bind(this);
  //   }

  render() {
    const { name, title, phone, email, location, description } = this.props;
    return (
      <div>
        <form>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={this.props.handlechange}
          />
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={this.props.handlechange}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={this.props.handlechange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.props.handlechange}
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={this.props.handlechange}
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={this.props.handlechange}
          />
        </form>
      </div>
    );
  }
}

export default Information;
