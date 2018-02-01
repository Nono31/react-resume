import React from 'react';
import PropTypes from 'prop-types';
import gravatar from 'gravatar';

const Basics = ({ resume }) => {
  if (resume.basics && resume.basics.email) {
    var gravatarPicture = gravatar.url(resume.basics.email, {
      s: '200',
      r: 'pg',
      d: 'mm'
    });
  }
  if (resume.basics.picture || gravatarPicture) {
    var profilePicture = resume.basics.picture ? resume.basics.picture : gravatarPicture;
  }

  return (
      <div className="col-sm-12">
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


