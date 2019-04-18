import React from 'react';
import PropTypes from 'prop-types';
import ProfileNetworkRow from './ProfileNetworkRow';

import { buildGoogleMapsLink } from '../../utils/link';

const Contact = ({ resume }) => {
  let containAddress = resume.basics.location && (resume.basics.location.city || resume.basics.location.region || resume.basics.location.postalCode || resume.basics.location.countryCode);
  let containAddressLine2 = [];
  if (resume.basics.location.city) {
    if (resume.basics.location.region || resume.basics.location.postalCode || resume.basics.location.countryCode) {
      containAddressLine2.push(`${resume.basics.location.city},`);
    }
    else {
      containAddressLine2.push(resume.basics.location.city);
    }
  }

  if (resume.basics.location.region) { containAddressLine2.push(resume.basics.location.region); }
  if (resume.basics.location.postalCode) { containAddressLine2.push(resume.basics.location.postalCode); }
  if (resume.basics.location.countryCode) { containAddressLine2.push(resume.basics.location.countryCode); }
  let locationStr = Object.keys(resume.basics.location).map(function (i) { return resume.basics.location[i] }).join(", ");

  return (
    <div className="box clearfix">
      <h2><i className="fa fa-bullseye ico" /> Contact</h2>
      {containAddress &&
        <div className="contact-item">
          <a href={buildGoogleMapsLink(locationStr)} target="_blank" rel="noopener noreferrer">
            <div className="icon float-left text-center"><span className="fa fa-map-marker fa-fw" /></div>
            {resume.basics.location.address &&
              <div className="title float-right">{resume.basics.location.address}</div>
            }
            {containAddressLine2.length > 0 &&
              <div className="title  float-right">{containAddressLine2.join(" ")}</div>
            }
          </a>
        </div>
      }
      {resume.basics.phone &&
        <div className="contact-item">
          <div className="icon float-left text-center"><span className="fa fa-phone fa-fw"></span></div>
          <div className="title only float-right">{resume.basics.phone}</div>
        </div>
      }
      {resume.basics.email &&
        <div className="contact-item">
          <div className="icon float-left text-center"><span className="fa fa-envelope fa-fw"></span></div>
          <div className="title only float-right"><a href={`mailto:${resume.basics.email}`} target="_blank" rel="noopener noreferrer">{resume.basics.email}</a></div>
        </div>
      }
      {resume.basics.url &&
        <div className="contact-item">
          <div className="icon float-left text-center"><span className="fa fa-globe fa-fw"></span></div>
          <div className="title only float-right"><a href={resume.basics.url} target="_blank" rel="noopener noreferrer">{resume.basics.url}</a></div>
        </div>
      }
      {resume.basics.profiles.map(p =>
        <ProfileNetworkRow key={p.network} profile={p} />
      )}
    </div>
  );
};

Contact.propTypes = {
  resume: PropTypes.object.isRequired
};

export default Contact;
