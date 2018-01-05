import React from 'react';
import PropTypes from 'prop-types';

const Basics = ({ resume }) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div id="photo-header" className="text-center">
          <div id="photo">
            <img src="http://www.gravatar.com/avatar/9acdb04e603c1cac2b893190f6dd5911?s=200&r=pg&d=mm" alt="avatar" />
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
    </div>
  );
};

Basics.propTypes = {
  resume: PropTypes.object.isRequired
};

export default Basics;


