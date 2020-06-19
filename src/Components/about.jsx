import React from 'react';

const About = () => {
  return (
    <React.Fragment>
      <h4
        className="about-head"
        style={{
          textTransform: 'uppercase',
          marginTop: 50,
          marginBottom: 30,
          textAlign: 'center'
        }}
      >
        A react app for maintaining your contacts
      </h4>
      <p style={{ textAlign: 'center' }}>Developed by ravi ranjan singh</p>
    </React.Fragment>
  );
};

export default About;
