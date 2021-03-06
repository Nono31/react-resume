import React from 'react';
import PropTypes from 'prop-types';
import gravatar from 'gravatar';

const Basics = ({ resume }) => {
  if (resume.basics && (resume.basics.email || (!resume.basics.image && !resume.basics.email))) {
    var gravatarPicture = gravatar.url(resume.basics.email, {
      s: '200',
      r: 'pg',
      d: 'mm',
      f: 'y'
    });
  }
  if (resume.basics.image || gravatarPicture) {
    var profilePicture = resume.basics.image ? resume.basics.image : gravatarPicture;
  }

  return (
    <div className="col-md-12">
      <div id="photo-header" className="text-center">
        <div id="photo">
          <img src={profilePicture} alt="avatar" />
        </div>
        <div id="text-header" >
          <h1>
            {resume.basics.name}
            <br />
            <span>{resume.basics.label}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

Basics.propTypes = {
  resume: PropTypes.object.isRequired
};

export default Basics;


