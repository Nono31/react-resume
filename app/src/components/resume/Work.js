import React from 'react';
import PropTypes from 'prop-types';
import WorkItemRow from './WorkItemRow';

const Work = ({ resume }) => {
    if (resume.work && resume.work.length > 0) {
        return (
            <div className="box clearfix">
                <h2><i className="fa fa-suitcase ico"></i> Work Experience</h2>
                {resume.work.map((w, index) =>
                    <WorkItemRow key={index} work={w} />
                )}
            </div>
        );
    }
    else return null;
};

Work.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Work;