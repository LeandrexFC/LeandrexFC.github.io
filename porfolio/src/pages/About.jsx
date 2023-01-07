import React, { Component } from 'react';
import '../AllCss/About.css'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

class About extends Component {

  render() {
    return (
      <>
      <Header />
      <div className='aboutText'>
      <h1 id='aboutTitle'>About.</h1>
      <p id='pAbout'> Hey, My name is Leandro Sousa, and I'm 19 years old, I have always been passionate about technology, I always had many doubts about which career to pursue until I found and discovered programming, from the first contact I had I fell in love, since then I started to always want to learn more.I'm currently studying Full Stack Web Development, and I'm learning more every day, and every project I complete makes me happier.
      My dream is to be happy with my career, travel the world and make a positive impact on people's lives with my programming knowledge, and I won't stop until I achieve that. </p>
      </div>
      <div className='aboutFooter'>
      <Footer />
      </div>
      </>
    )
  }
}

export default About;