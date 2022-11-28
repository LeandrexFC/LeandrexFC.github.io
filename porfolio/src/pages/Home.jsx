import React, { Component } from 'react'
import Header from '../Components/Header';
import PropTypes from 'prop-types';
import '../App.css'
import profilepic from '../profile-pic Linkedin.png'

class Home extends Component {
  redirectToProjects = () => {
    const { history } = this.props;
    history.push('/projects')
  }
  render() {
    return (
      <div>
      <Header />
      <h1> Hey, I'm Leandro </h1>
      <p>I'm a Web developer from São Paulo, BR. I study at Trybe Curse, And I'm Loving the Developer World. </p>
      <button type='button' onClick={ this.redirectToProjects }> My Projects </button>
      <img src={ profilepic } alt='Leandro img' />
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