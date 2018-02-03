import React from 'react';
import PropTypes from 'prop-types';

const Hobbies = ({ resume }) => {

    return (
        <div className="box">
            <h2><i className="fa fa-heart ico"></i> Interests</h2>
            {resume.interests.map((interest, index) =>
                <div key={index} className="interests clearfix">
                    <div className="item-interests">
                        {interest.name}
                    </div>
                    <div className="col-md-12 offset-md-1 clearfix">
                        {interest.keywords.map((keyword, index) =>
                            <span key={index} className="interest badge">{keyword}</span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

Hobbies.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Hobbies;
