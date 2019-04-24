import React, {Component} from 'react';

export default class Header extends Component {
    render() {
      let resumeData = this.props.resumeData;
      return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="www.google.com" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                        <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul> {/* end #nav */}
                    </nav> {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                        <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
                        <h3>I'm a {resumeData.role}, <span>UI developer</span> and <span>Web Designer</span> focused on crafting clean and user friendly experiences. Experienced UI Developer with a demonstrated history of working in IT Software. Skilled in converting PSDs to HTML, converting HTML to WordPress templates, Code Emails and Landing Pages. Designing PSD as per wire-frame. Let's <a className="smoothscroll" href="#about">start scrolling</a>
                            and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                        <hr />
                        <ul className="social">
                            <li><a href="https://www.facebook.com/satishnagarajan603"><i className="fa fa-facebook" /></a></li>
                            <li><a href="https://twitter.com/Sathish603"><i className="fa fa-twitter" /></a></li>
                            <li><a href="https://www.linkedin.com/in/satish-nagarajan-55384b91/"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="https://www.instagram.com/sathish603/"><i className="fa fa-instagram" /></a></li>
                            <li><a href="https://join.skype.com/invite/SQ5qikG2ZrHo"><i className="fa fa-skype" /></a></li>
                        </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header>

            </React.Fragment>
        );
    }
  }