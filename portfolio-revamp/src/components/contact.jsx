import React from 'react';
import GithubIcon from '../contact-icons/github_icon.png';
import PhoneIcon from '../contact-icons/phone_icon.png';
import EmailIcon from '../contact-icons/email_icon.png';
import LinkedinIcon from '../contact-icons/linkedin_icon.png';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1><a name="contact">Contact</a></h1>

      <section className="contact">
        <a href="https://www.github.com/akorn3001">
          <img src={GithubIcon} alt="github" className="contact-icon gh-icon" width="25px" height="25px" />
        </a>

        <a href="https://www.linkedin.com/in/alex-kornfeld-80133565/">
          <img src={LinkedinIcon} alt="linkedin" className="contact-icon li-icon" width="25px" height="25px" />
        </a>

        <div className="contact-info-email">
          <img src={EmailIcon} alt="email" className="contact-icon" width="25px" height="25px" />
          <span>akorn3000@gmail.com</span>
        </div>

        <div className="contact-info-phone">
          <img src={PhoneIcon} alt="email" className="contact-icon" width="25px" height="25px" />
          <span>(917) 842-2349</span>
        </div>
      </section>
    </div>
  );
};

export default Contact;
