import React from 'react';
import PropTypes from 'prop-types';

const Languages = ({ resume }) => {

    return (
        <div className="box">
            <h2><i className="fa fa-language ico"></i> Languages</h2>
            <ul className="list-group">
                {resume.languages.map((language, index) =>
                    <li key={index} className=" list-group-item">{language.language}<span className="skill badge pull-right">{language.fluency}</span></li>
                )}
            </ul>
        </div>
    );
};

Languages.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Languages;
