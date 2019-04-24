import React, {Component} from 'react';

export default class About extends Component {
    render() {
      return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="/images/profilepic.jpg" alt="profilepic" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p> I'm a Front End Developer with 5 years of experience in field of web development. Self motivated and learn upcoming technologies. Seeking for the challenging job that could enhance my knowledge and trigger my creative thinking and applying them in business advancement. Always ready to contribute my hard work and skills to the growth and success of an organization. My hobbies are photography and listening to music. 
                        </p>
                        <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                            <span>N Satish</span><br />
                            <span>385 Thilkavathy Illam,<br />
                                Davis Dale, Ooty-643001, The Nilgiris.
                            </span><br />
                            <span>+91 9843485591</span><br />
                            <span>sathishnagarajan603@gmail.com</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                            <a href="http://localhost:3000/images/satish-resume23042019.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                            </p>
                        </div>
                        </div> {/* end row */}
                    </div> {/* end .main-col */}
                    </div>
                </section> {/* About Section End*/}`
            </React.Fragment>
        );
    }
  }