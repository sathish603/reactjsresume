import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
      return (
            <React.Fragment>
                <footer>
                    <div className="row">
                        <div className="twelve columns">
                        <ul className="social-links">
                            <li><a href="https://www.facebook.com/satishnagarajan603"><i className="fa fa-facebook" /></a></li>
                            <li><a href="https://twitter.com/Sathish603"><i className="fa fa-twitter" /></a></li>
                            <li><a href="https://www.linkedin.com/in/satish-nagarajan-55384b91/"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="https://www.instagram.com/sathish603/"><i className="fa fa-instagram" /></a></li>
                            <li><a href="https://join.skype.com/invite/SQ5qikG2ZrHo"><i className="fa fa-skype" /></a></li>
                        </ul>
x                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </footer> {/* Footer End*/}
            </React.Fragment>
        );
    }
  }