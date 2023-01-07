import React, { Component } from 'react'
import Header from '../Components/Header'
import '../AllCss/Skills.css'

class Skills extends Component {
  render() {
    return (
      <div>
      <Header />
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
    )
  }
}

export default Skills