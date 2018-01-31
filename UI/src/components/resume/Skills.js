import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ resume }) => {

    return (
        <div className="box">
            <h2><i className="fa fa-tasks ico"></i> Skills</h2>
        </div>
    );
};

Skills.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Skills;
