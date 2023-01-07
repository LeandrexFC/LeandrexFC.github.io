import React, { Component } from 'react'
import Header from '../Components/Header';
import PropTypes from 'prop-types';
import '../AllCss/Home.css'
import profilePic from '../images/profile-pic Linkedin.png';
import LinkedinLogo from '../images/LinkedinLogo.png';
import emailLogo from '../images/emailLogo.png';
import Footer from '../Components/Footer';

class Home extends Component {
  redirectToProjects = () => {
    const { history } = this.props;
    console.log(history)
    history.push('/projects')
  }

  render() {
    return (
      <div>
      <Header />
      <div className='welcome'>
      <h1 className='text1'> Welcome. </h1>
      <p className='textp'> My name is Leandro Sousa, I'm a Web developer from São Paulo, BR. I study at Trybe Curse, And I'm Loving the Developer World. </p>
      <button className='btn-home' type='button' onClick={ this.redirectToProjects }> My Projects </button>
      <div className='imgDiv'>
      <img id='profilePic' src={ profilePic } alt='Leandro img' />
      </div>
      </div>

      <div className='aboutTextHome'>
      <h1 id='aboutTitleHome'>About.</h1>
      <p id='pAboutHome'> Hey, My name is Leandro Sousa, and I'm 19 years old, I have always been passionate about technology, I always had many doubts about which career to pursue until I found and discovered programming, from the first contact I had I fell in love, since then I started to always want to learn more.I'm currently studying Full Stack Web Development, and I'm learning more every day, and every project I complete makes me happier.
      My dream is to be happy with my career, travel the world and make a positive impact on people's lives with my programming knowledge, and I won't stop until I achieve that. </p>
      </div>
      <div>
        <div>
          <h1 className='skillTitle'>Skills.</h1>
        </div>
        <div className='skills'>
          <p>HTML5</p>
          <p>CSS</p>
          <p>JS</p>
          <p>REACT</p>
          <p>JEST</p>
          <p>RTL</p>
          <p>GIT</p>
          <p>GITHUB</p>
        </div>
      </div>

      <section id='allContactHome'>
        <div id='allContactTextHome'>
          <h1 className='contactTextHome'>Hey,</h1>
          <h2 className='contactTextHome'>For some reason do you wanna talk to me?</h2>
          <h2 h2 className='contactTextHoe'>You can text me here:</h2>
        <div id='allContactImgHome'>
          <a className='linkedinAHome' href='https://www.linkedin.com/in/leandro-sousa-dev/' target='_blank' rel="noreferrer">
          <img src={ LinkedinLogo } alt='Linkedin Logo' className='linkedinImgHome'/>
          </a>
          <a className='emailAHome' href="mailto:leandro.sousa23tec@gmail.com">
          <img src={ emailLogo } alt='Email logo' className='emailImgHome' />
          </a>
        </div>   
        </div>
        {/* <div id='MyImgHome'>
          <img id='contactProfilePicHome' src={ profilePic } alt='Leandro img' />
        </div> */}
      </section>
      <div id='homeFooter'>
      <Footer />
      </div>
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