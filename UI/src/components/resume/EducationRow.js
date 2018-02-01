import React from 'react';
import PropTypes from 'prop-types';

const EducationRow = ({ education }) => {

    return (
        <li>
            <div className="year pull-left">{education.startDate} {education.endDate}</div>
            <div className="description pull-right">
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
