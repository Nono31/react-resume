import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDateTime } from '../../utils/dates';

const EducationRow = ({ education }) => {
  let dateFormat = { year: 'numeric' };
  return (
    <li>
      <div className="year float-left">{getFormattedDateTime(education.startDate, dateFormat)} {education.endDate ? getFormattedDateTime(education.endDate, dateFormat) : 'Present'}</div>
      <div className="description float-right">
        <h3>{education.institution}</h3>
        <p><i className="fa fa-graduation-cap ico"></i> {education.studyType}</p>
        <p>{education.area}</p>
        {education.gpa &&
          <p>
            GPA: {education.gpa}
          </p>
        }
        {renderCourses(education.courses)}
      </div>
    </li>
  );
};

function renderCourses(courses) {
  if (courses && courses.length > 0) {
    return ([
      <div key="courses.title">Courses</div>,
      <ul key="courses.ul" className="list-group">
        {courses.map((c, index) =>
          <li key={index} className="list-group-item">{c}</li>
        )}
      </ul>
    ]);
  } return null;
}

EducationRow.propTypes = {
  education: PropTypes.object.isRequired
};

export default EducationRow;
