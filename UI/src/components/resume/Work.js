import React from 'react';
import PropTypes from 'prop-types';
import WorkItemRow from './WorkItemRow';

const Work = ({ resume }) => {
    return (
        <div className="box clearfix">
            <h2><i className="fa fa-suitcase ico"></i>Work Experience</h2>
            {resume.work.map(w =>
                <WorkItemRow key={w.company} work={w} />
            )}
        </div>
    );
};

Work.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Work;