import React from 'react';
import PropTypes from 'prop-types';

const Basics = ({ resume }) => {
  return (
    <div className="row">
      <div className="col-xs-12">
        <div id="photo-header" className="text-center">
          <div id="photo">
            <img src={resume.basics.photo} alt="avatar" />
          </div>
          <div id="text-header" >
            <h1>{resume.basics.name}<br />{resume.basics.label}<span>{resume.basics.label}</span>{resume.basics.label}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

Basics.propTypes = {
  resume: PropTypes.object.isRequired
};

export default Basics;


