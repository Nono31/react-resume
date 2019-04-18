import React from 'react';
import PropTypes from 'prop-types';

const About = ({ resume }) => {

    return (
        <div className="box">
            <h2><i className="fa fa-user ico"></i> About</h2>
            <p>{resume.basics.summary}</p>
        </div>
    );
};

About.propTypes = {
    resume: PropTypes.object.isRequired
};

export default About;
