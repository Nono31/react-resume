import React from 'react';
import PropTypes from 'prop-types';

const VolunteerRow = ({ volunteer }) => {

    return (
        <div className="job clearfix">
            <div className="row">
                <div className="details">
                    <div className="where">{volunteer.organization}</div>
                    <div className="address">
                        <a href={volunteer.url} target="_blank"><i className="fa fa-globe ico"></i> {volunteer.url}</a>
                    </div>
                    <div className="year">{volunteer.startDate} – {volunteer.endDate}</div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-11 pull-right">
                    <div className="profession">{volunteer.position}</div>
                    <div className="description">
                        {volunteer.summary}
                        <div className="highlights">Highlights</div>
                        <ul className="list-group">
                            {volunteer.highlights.map((h, index) =>
                                <li key={index} className="list-group-item">{h}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

VolunteerRow.propTypes = {
    volunteer: PropTypes.object.isRequired
};

export default VolunteerRow;
