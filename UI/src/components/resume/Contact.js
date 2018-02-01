import React from 'react';
import PropTypes from 'prop-types';
import ProfileNetworkRow from './ProfileNetworkRow';

const Contact = ({ resume }) => {
    return (
        <div className="box clearfix">
            <h2><i className="fa fa-bullseye ico" /> Contact</h2>
            <div className="contact-item">
                <div className="icon pull-left text-center"><span className="fa fa-map-marker fa-fw" /></div>
                <div className="title pull-right">{resume.basics.location.address}</div>
                <div className="title  pull-right">{resume.basics.location.city}, {resume.basics.location.region} {resume.basics.location.postalCode} {resume.basics.location.countryCode}</div>
            </div>
            <div className="contact-item">
                <div className="icon pull-left text-center"><span className="fa fa-phone fa-fw"></span></div>
                <div className="title only pull-right">{resume.basics.phone}</div>
            </div>
            <div className="contact-item">
                <div className="icon pull-left text-center"><span className="fa fa-envelope fa-fw"></span></div>
                <div className="title only pull-right"><a href="mailto:{resume.basics.email}" target="_blank">{resume.basics.email}</a></div>
            </div>
            <div className="contact-item">
                <div className="icon pull-left text-center"><span className="fa fa-globe fa-fw"></span></div>
                <div className="title only pull-right"><a href={resume.basics.url} target="_blank">{resume.basics.url}</a></div>
            </div>
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