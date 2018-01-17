import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Basics from './resume/Basics';
import About from './resume/About';
import Work from './resume/Work';
import Contact from './resume/Contact'
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
          </div>
          <div className="col-12 col-sm-5">
            <Contact resume={resume} />
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

function mapStateToProps(state, ownProps) {
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
