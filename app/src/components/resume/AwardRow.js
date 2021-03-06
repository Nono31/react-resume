import React from 'react';
import PropTypes from 'prop-types';

import { getFormattedDateTime } from '../../utils/dates';

const AwardRow = ({ award }) => {

  return (
    <li>
      <div className="year float-left">{getFormattedDateTime(award.date)}</div>
      <div className="description float-right">
        <h3>{award.awarder}</h3>
        <p><i className="fa fa-trophy ico"></i> {award.title}</p>
        <p>{award.summary}</p>
      </div>
    </li>
  );
};



AwardRow.propTypes = {
  award: PropTypes.object.isRequired
};

export default AwardRow;
