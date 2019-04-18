import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDateTime } from '../../utils/dates';
import { buildGoogleMapsLink } from '../../utils/link';

const WorkItemRow = ({ work }) => {
  return (
    <div className="job clearfix">
      <div className="row">
        <div className="details">
          <div className="where">{work.name}</div>
          {work.location &&
            <div className="location">
              <a href={buildGoogleMapsLink(work.location)} target="_blank" rel="noopener noreferrer"><i className="fa fa-map-marker ico"></i> {work.location}</a>
            </div>
          }
          {work.description &&
            <div className="intro">{work.description}</div>
          }
          {work.url &&
            <div className="address">
              <a href={work.url} target="_blank" rel="noopener noreferrer"><i className="fa fa-globe ico"></i> {work.url}</a>
            </div>
          }
          <div className="year">{getFormattedDateTime(work.startDate)} – {work.endDate ? getFormattedDateTime(work.endDate) : 'Present'}</div>
        </div>
      </div>
      <div className="row">
        <div className="job-details col-sm-11">
          <div className="profession">{work.position}</div>
          <div className="description">
            {work.summary}
            <Highlights work={work} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Highlights = ({ work }) => {
  if (work.highlights && work.highlights.length > 0) {
    return ([<div key="highlights.hl" className="highlights" >Highlights</div>,
    <ul key="highlights.ul" className="list-group">
      {work.highlights.map((highlight, index) =>
        <li key={index} className="list-group-item">{highlight}</li>
      )}
    </ul>]);
  }
  else return null;
};

WorkItemRow.propTypes = {
  work: PropTypes.object.isRequired
};

export default WorkItemRow;
