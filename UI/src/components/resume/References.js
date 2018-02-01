import React from 'react';
import PropTypes from 'prop-types';

const References = ({ resume }) => {

    return (
        <div className="box">
            <h2><i className="fa fa-check-square ico"></i> References</h2>
            {resume.references.map((reference, index) =>
                <blockquote key={index}>
                    <div>{reference.reference}</div>
                    <footer>
                        <a href="#" target="_blank">{reference.name}</a>
                    </footer>
                </blockquote>
            )}
        </div>
    );
};

References.propTypes = {
    resume: PropTypes.object.isRequired
};

export default References;
