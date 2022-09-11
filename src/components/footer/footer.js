import React from 'react'
import './footer.css'
import git from '../../img/github-sign.png'
import li from '../../img/linkedin-logo.png'
const Footer = () => {
  return (
   <>
    <div className="footer"id="contact">
        <div className="container">
            <div className="row">
                <div class ="col-md-12">
                    <h2 className='text-center'>Follow Me</h2>
                    <ul>
                        <li><a href='https://github.com/ahmedsa11'><img src={git} alt="git"/></a></li>
                      <li><a href="https://www.linkedin.com/in/ahmed-salama-a18b48200"><img src={li} alt="li"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p className="text-center">Created By Ahmed Salama &copy; 2022</p>
    </div>
   </>
  )
}

export default Footer