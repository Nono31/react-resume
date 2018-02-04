import React from 'react';
import PropTypes from 'prop-types';
import VolunteerRow from './VolunteerRow';

const Volunteer = ({ resume }) => {
    if (resume.volunteer && resume.volunteer.length > 0) {
        return (
            <div className="box">
                <h2><i className="fa fa-group ico"></i> Volunteer</h2>
                {resume.volunteer.map((v, index) =>
                    <VolunteerRow key={index} volunteer={v} />
                )}
            </div>
        );
    }
    return null;
};

Volunteer.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Volunteer;