import React from 'react';
import PropTypes from 'prop-types';

const Publications = ({ resume }) => {

    return (
        <div className="box">
            <h2><i className="fa fa-book ico"></i> Publications</h2>
        </div>
    );
};

Publications.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Publications;
