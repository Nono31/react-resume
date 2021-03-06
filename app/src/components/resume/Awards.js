import React from 'react';
import PropTypes from 'prop-types';
import AwardRow from './AwardRow';

const Awards = ({ resume }) => {
  if (resume.awards && resume.awards.length > 0) {
    return (
      <div className="box">
        <h2><i className="fa fa-certificate ico"></i> Awards</h2>
        <ul id="awards" className="clearfix">
          {resume.awards.map((a, index) =>
            <AwardRow key={index} award={a} />
          )}
        </ul>
      </div>
    );
  }
  return null;
};

Awards.propTypes = {
  resume: PropTypes.object.isRequired
};

export default Awards;
