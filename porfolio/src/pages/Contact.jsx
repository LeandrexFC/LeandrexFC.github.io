import React, { Component } from 'react';
import '../App.css';
import Header from '../Components/Header';
import InstagramLogo from '../images/InstagramLogo.png'
import LinkedinLogo from '../images/LinkedinLogo.png'
import GitHubLogo from '../images/GitHubLogo.png'

class Contact extends Component {
  render() {
    return (
      <> 
      <Header />
      <h1>Hello.</h1>
      <h3>Hey, for some reason do you wanna talk to me?</h3>
      <a href='https://www.instagram.com/lle.sousa/' target='blank'>
      <img src={ InstagramLogo } alt='Instagram Logo'></img>
      </a>
      <a href='https://www.linkedin.com/in/leandro-sousa-dev/' target='blank'>
      <img src={ LinkedinLogo } alt='Linkedin Logo'></img>
      </a>
      <a href='https://github.com/LeandrexFC' target='blank'>
      <img src={ GitHubLogo } alt='GitHub Logo'></img>
      </a>
      </>
    )
  }
}

export default Contact;