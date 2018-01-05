import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Basics from './resume/Basics';
import * as resumeActions from './../actions/resumeActions';

class ResumePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { resume } = this.props;

    return (
      <Basics resume={resume} />
    );
  }
}

ResumePage.propTypes = {
  resume: PropTypes.object.isRequired,
  /*actions: PropTypes.object.isRequired*/
};

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
