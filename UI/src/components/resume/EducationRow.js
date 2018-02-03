import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDateTime } from '../../utils/dates';

const EducationRow = ({ education }) => {
let dateFormat =  { year: 'numeric' };
    return (
        <li>
            <div className="year float-left">{getFormattedDateTime(education.startDate, dateFormat)} {getFormattedDateTime(education.endDate, dateFormat)}</div>
            <div className="description float-right">
                <h3>{education.institution}</h3>
                <p><i className="fa fa-graduation-cap ico"></i> {education.studyType}</p>
                <p>{education.area}</p>
                <p>
                    GPA: {education.gpa}
                </p>
                <div>Courses</div>
                <ul className="list-group">
                    {education.courses.map((c, index) =>
                        <li key={index} className="list-group-item">{c}</li>
                    )}
                </ul>
            </div>
        </li>
    );
};

EducationRow.propTypes = {
    education: PropTypes.object.isRequired
};

export default EducationRow;
