import React from 'react';
import PropTypes from 'prop-types';

const Languages = ({ resume }) => {

    return (
        <div className="box">
            <h2><i className="fa fa-language ico"></i> Languages</h2>
            <ul className="list-group">

            </ul>
        </div>
    );
};

Languages.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Languages;
