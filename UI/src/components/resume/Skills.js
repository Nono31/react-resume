import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ resume }) => {

    return (
        <div className="box">
            <h2><i className="fa fa-tasks ico"></i> Skills</h2>
            {resume.skills.map((skill, index) =>
                <div key={index} className="skills clearfix">
                    <div className="item-skills">
                        {skill.name}
                        <span className="skill-level">{skill.level}</span>
                    </div>
                    <div className="col-md-12 offset-md-1 clearfix">
                        {skill.keywords.map((keyword, index) =>
                            <span key={index} className="skill badge">{keyword}</span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

Skills.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Skills;
