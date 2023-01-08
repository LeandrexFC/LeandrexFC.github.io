import React, { Component } from 'react';
import '../AllCss/Projects.css'
import Header from '../Components/Header';

class Projects extends Component {
  render() {
    return (
      <div>
      <Header />
      <h1 className='projectsTitle'> Projects. </h1>
      </div>
    )
  }
}

export default Projects