import React, { Component } from 'react'
import Header from '../Components/Header';
import PropTypes from 'prop-types';
import '../App.css'
import profilePic from '../images/profile-pic Linkedin.png'

class Home extends Component {
  redirectToProjects = () => {
    const { history } = this.props;
    history.push('/projects')
  }
  render() {
    return (
      <div>
      <Header />
      <h1 className='text1'> Welcome. </h1>
      <p className='textp'> My name is Leandro Sousa, I'm a Web developer from São Paulo, BR. I study at Trybe Curse, And I'm Loving the Developer World. </p>
      <button className='btn-home' type='button' onClick={ this.redirectToProjects }> My Projects </button>
      <img id='profilePic' src={ profilePic } alt='Leandro img' />
      </div> 
    )
  }
};

export default Home;

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;