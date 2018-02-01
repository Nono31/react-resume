import React from 'react';
import PropTypes from 'prop-types';
import EducationRow from './EducationRow';

const Education = ({ resume }) => {

    return (
        <div className="box">
            <h2><i className="fa fa-university ico"></i> Education</h2>
            <ul id="education" className="clearfix">
            {resume.education.map((e, index) =>
                <EducationRow key={index} education={e} />
            )}
            </ul>
        </div>
    );
};

Education.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Education;