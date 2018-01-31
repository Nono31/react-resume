import React from 'react';
import PropTypes from 'prop-types';

const Hobbies = ({ resume }) => {

    return (
        <div className="box">
             <h2><i className="fa fa-heart ico"></i> Interests</h2>
            <ul className="list-group">

            </ul>
        </div>
    );
};

Hobbies.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Hobbies;
