import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDateTime } from '../../utils/dates';

const WorkItemRow = ({ work }) => {
    return (
        <div className="job clearfix">
            <div className="row">
                <div className="details">
                    <div className="where">{work.name}</div>
                    <div className="address">
                        <a href={work.url} target="_blank"><i className="fa fa-globe ico"></i> {work.url}</a>
                    </div>
                    <div className="year">{getFormattedDateTime(work.startDate)} – {getFormattedDateTime(work.endDate)}</div>
                </div>
            </div>
            <div className="row">
                <div className="job-details col-sm-11">
                    <div className="profession">{work.position}</div>
                    <div className="description">
                        {work.summary}
                        {work.highlights.length > 0 && <Highlights work={work} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Highlights = ({ work }) => {
    return ([<div key="highlights.hl" className="highlights" >Highlights</div>,
    <ul key="highlights.ul" className="list-group">
        {work.highlights.map((highlight, index) =>
            <li key={index} className="list-group-item">{highlight}</li>
        )}
    </ul>]);
};

WorkItemRow.propTypes = {
    work: PropTypes.object.isRequired
};

export default WorkItemRow;
