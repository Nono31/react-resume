import React from 'react';
import PropTypes from 'prop-types';


const WorkItemRow = ({ work }) => {
    return (
        <div className="job clearfix">
            <div className="row">
                <div className="details">
                    <div className="where">{work.company}</div>
                    <div className="address">
                        <a href={work.website} target="_blank"><i className="fa fa-globe ico"></i> {work.website}</a>
                    </div>
                    <div className="year">December 2013 – December 2014</div>
                </div>
            </div>
            <div className="row">
                <div className="job-details col-xs-11">
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
    return ([<div className="highlights" >Highlights</div>,
    <ul className="list-group">
        {work.highlights.map(highlight =>
            <li className="list-group-item">{highlight}</li>
        )}
    </ul>]);
}

WorkItemRow.propTypes = {
    work: PropTypes.object.isRequired
};

export default WorkItemRow;
