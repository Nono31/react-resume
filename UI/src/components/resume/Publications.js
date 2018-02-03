import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDateTime } from '../../utils/dates';

const Publications = ({ resume }) => {
    let dateFormat = { day: 'numeric', month: 'long', year: 'numeric' };
    return (
        <div className="box">
            <h2><i className="fa fa-book ico"></i> Publications</h2>
            {resume.publications.map((publication, index) =>
                <div key={index} className="publication card">
                    <div className="card-header">
                        <div className="name">{publication.name}</div>
                    </div>
                    <div className="card-block">
                        <div className="publisher"><i className="fa fa-bookmark ico"></i> {publication.publisher}</div>
                        <div className="year">{getFormattedDateTime(publication.releaseDate, dateFormat)}</div>
                        <div className="address">
                            <a href={publication.url} target="_blank"><i className="fa fa-globe ico"></i> {publication.url}</a>
                        </div>
                        <p>{publication.summary}</p>
                    </div>
                </div>
            )}

        </div>
    );
};

Publications.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Publications;
