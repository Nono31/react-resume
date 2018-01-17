import React from 'react';
import PropTypes from 'prop-types';

const ProfileNetworkRow = ({ profile }) => {
    let iconClass;
    switch (profile.network.toLowerCase()) {
        // special cases
        case "google-plus":
        case "googleplus":
            iconClass = "fa fa-google-plus";
            break;
        case "flickr":
        case "flicker":
            iconClass = "fa fa-flickr";
            break;
        case "linkedin":
            iconClass = "fa fa-linkedin-square";
            break;
        case "dribbble":
        case "dribble":
            iconClass = "fa fa-dribbble";
            break;
        case "codepen":
            iconClass = "fa fa-codepen";
            break;
        case "soundcloud":
            iconClass = "fa fa-soundcloud";
            break;
        case "reddit":
            iconClass = "fa fa-reddit";
            break;
        case "tumblr":
        case "tumbler":
            iconClass = "fa fa-tumblr";
            break;
        case "stack-overflow":
        case "stackoverflow":
            iconClass = "fa fa-stack-overflow";
            break;
        case "blog":
        case "rss":
            iconClass = "fa fa-rss";
            break;
        case "gitlab":
            iconClass = "fa fa-gitlab";
            break;
        case "github":
            iconClass = "fa fa-github";
            break;
        case "twitter":
            iconClass = "fa fa-twitter";
            break;
        case "keybase":
            iconClass = "fa fa-key";
            break;
        default:
            // try to automatically select the icon based on the name
            iconClass = "fa fa-" + profile.network.toLowerCase();
    }
    return (
        <div className="contact-item">
            <div className="icon pull-left text-center"><span className={`${iconClass} fa-fw`}></span></div>
            <div className="title pull-right">{profile.network}</div>
            <div className="description pull-right"><a href={profile.url} target="_blank">{profile.username}</a></div>
        </div>
    );
};

ProfileNetworkRow.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileNetworkRow;
