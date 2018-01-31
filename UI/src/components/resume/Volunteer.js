import React from 'react';
import PropTypes from 'prop-types';

const Volunteer = ({ resume }) => {

    return (
        <div className="box">
            <h2><i className="fa fa-group ico"></i> Volunteer</h2>
        </div>
    );
};

Volunteer.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Volunteer;
