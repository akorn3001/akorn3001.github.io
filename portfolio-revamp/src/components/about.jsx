import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <a name="about-me"><h1>About Me</h1></a>
      <section className="about-section">
        I'm a software developer based in NYC with a passion for tackling
        challenging problems. I have experience using Ruby on Rails, React and
        Redux, Python, and Django as well as PostgreSQL databases.
        <br />
        <br />
        My love for software development stems from a lifelong enthusiasm for
        problem solving, which drove me to receive my B.S. in Physics and M.S.
        in Mechanical Engineering, both from Stony Brook University.
        <br />
        <br />
        I have five years of experience studying and performing improv comedy.
        Check me out at the <a href="https://www.magnettheater.com">Magnet Theater!</a>
      </section>
    </div>
  );
};

export default AboutMe;
