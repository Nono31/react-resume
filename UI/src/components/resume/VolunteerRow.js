import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDateTime } from '../../utils/dates';

const VolunteerRow = ({ volunteer }) => {

    return (
        <div className="job clearfix">
            <div className="row">
                <div className="details">
                    <div className="where">{volunteer.organization}</div>
                    <div className="address">
                        <a href={volunteer.url} target="_blank"><i className="fa fa-globe ico"></i> {volunteer.url}</a>
                    </div>
                    <div className="year">{getFormattedDateTime(volunteer.startDate)} – {getFormattedDateTime(volunteer.endDate)}</div>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-sm-11">
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
