import React from 'react';
import PropTypes from 'prop-types';

const References = ({ resume }) => {
    if (resume.references && resume.references.length > 0) {
        return (
            <div className="box">
                <h2><i className="fa fa-check-square ico"></i> References</h2>
                {resume.references.map((reference, index) =>
                    <blockquote key={index} className="blockquote">
                        <p>{reference.reference}</p>
                        <footer className="blockquote-footer">
                            <a href="#" target="_blank" rel="noopener noreferrer">{reference.name}</a>
                        </footer>
                    </blockquote>
                )}
            </div>
        );
    }
    return null;
};

References.propTypes = {
    resume: PropTypes.object.isRequired
};

export default References;
