import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Basics from './resume/Basics';
import About from './resume/About';
import Work from './resume/Work';
import Awards from './resume/Awards';
import Volunteer from './resume/Volunteer';
import Contact from './resume/Contact';
import Education from './resume/Education';
import Skills from './resume/Skills';
import Publication from './resume/Publications';
import Languages from './resume/Languages';
import Hobbies from './resume/Hobbies';
import References from './resume/References';
import * as resumeActions from './../actions/resumeActions';

class ResumePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { resume } = this.props;
    changeTitle(resume);

    return (
      <div>
        <div className="row">
          <Basics resume={resume} />
        </div>
        <div className="row">
          <div className="col-12 col-sm-7">
            <About resume={resume} />
            <Work resume={resume} />
            <Awards resume={resume} />
            <Volunteer resume={resume} />
          </div>
          <div className="col-12 col-sm-5">
            <Contact resume={resume} />
            <Education resume={resume} />
            <Skills resume={resume} />
            <Publication resume={resume} />
            <Languages resume={resume} />
            <Hobbies resume={resume} />
            <References resume={resume} />
          </div>
        </div>
      </div>
    );
  }
}

ResumePage.propTypes = {
  resume: PropTypes.object.isRequired,
  /*actions: PropTypes.object.isRequired*/
};

function changeTitle(resume) {
  if (resume.basics.name === undefined) {
    document.title = 'Loading...';
  }
  else {
    document.title = resume.basics.name;
  }
}

function mapStateToProps(state) {
  //Reducers
  return {
    resume: state.resume
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(resumeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumePage);
