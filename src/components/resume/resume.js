import React, {Component} from 'react';

export default class Resume extends Component {
    render() {
      return (
            <React.Fragment>
                <section id="resume">
                {/* Education
                ----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>Master of Computer Applications</h3>
                        <p className="info">Computer Application <span>•</span> <em className="date">April 2010</em></p>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>Diploma In Web Applications</h3>
                        <p className="info">Web Application <span>•</span> <em className="date">April 2010</em></p>                        
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>BSc Computer Science</h3>
                        <p className="info">Computer Science <span>•</span> <em className="date">April 2007</em></p>                        
                        </div>
                    </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Education */}
                {/* Work
                ----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>G2 Technology Solutions</h3>
                        <p className="info">Web Designer <span>•</span> <em className="date">October 2018 - April 2019</em></p>
                        <p>
                        Converting PSDs to HTML markup. Converting HTML to Wordpress theme and install necessary plugins. Working with Jquery plugins and animations. Optimizing and maintain existing websites. Converting normal websites into responsive design website.
                        </p>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>DCIS (Dot Com Solutions India)</h3>
                        <p className="info">Front End Engineer <span>•</span> <em className="date">January 2014 - May 2018</em></p>
                        <p>
                        Focus on Designing, Coding, Testing Cross Browser Compatibility web sites. Experience in HTML, CSS, JavaScript, Photoshop, Bootstrap, Watson Campaign (SilverPop). Integrating customized themes in Wordpress. Converting websites into responsive design. Worked closely with Designers to ensure sites were true to the original mockups, incorporated any valuable feedback that arose during implementation, and made for the best user experience possible. Optimization and Maintenance of existing websites. Converting PSD to HTML pages. Validate pages with W3C coding standards. Creating wireframes for web page, emails and landing pages. Coding Responsive Email Templates and landing pages to International standards for top immigration sites, Developed an email automation workflow. Uploading Email templates to Silverpop and handling emails. Coding Email Templates compatible with more than 40 clients.
                        </p>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>SSI Educations</h3>
                        <p className="info">Technical Trainer <span>•</span> <em className="date">June 2012 - September 2013</em></p>
                        <p>
                        Prepare training material (presentations, worksheets etc.) Observe and evaluate results of trainee. Conducting machine test. R&amp;D on new web technologies. Teach and evaluate new technical trainers.
                        </p>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>C Cubed Solutions</h3>
                        <p className="info">Technical Support Representative <span>•</span> <em className="date">May 2011 - February 2012</em></p>
                        <p>
                        Focus on providing online technical support for Microsoft products and handling all persistent cases. Responsible for maintaining excellent working relationship with customers, sales and troubleshooting team. Worked independently and under pressure. Responsible for providing technical support such as printer issues, software issues, email issues, login issues. Provide technical support remotely. Responsible for other duties as assigned.
                        </p>
                        </div>
                    </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Work */}
                {/* Skills
                ----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <p>Good team player, Professional in creativity, Willing to learn more, Supporting Team members, Good Communication Skill.
                    </p>
                    <div className="bars">
                        <ul className="skills">
                        <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                        <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>                        <li><span className="bar-expand html5" /><em>HTML5</em></li>
                        <li><span className="bar-expand css" /><em>CSS</em></li>
                        <li><span className="bar-expand bootstrap" /><em>Bootstrap</em></li>                        
                        <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                        <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                        <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                        <li><span className="bar-expand react" /><em>React</em></li>

                        </ul>
                    </div>{/* end skill-bars */}
                    </div> {/* main-col end */}
                </div> {/* End skills */}
                </section> {/* Resume Section End*/}


            </React.Fragment>
        );
    }
  }