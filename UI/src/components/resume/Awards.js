import React from 'react';
import PropTypes from 'prop-types';

const Awards = ({ resume }) => {

    return (
        <div className="box">
            <h2><i className="fa fa-certificate ico"></i> Awards</h2>
            <ul id="awards" className="clearfix">
            </ul>
        </div>
    );
};

Awards.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Awards;
