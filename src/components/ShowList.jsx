import React from 'react';
import PropTypes from 'prop-types';
import ShowComponent from './ShowComponent';

function ShowList(props) {
  return(
    <div>
      {Object.keys(props.shows).forEach((show) =>
        <ShowComponent show={show}/>
      )}
    </div>
  );
}

ShowList.PropTypes = {
  shows: PropTypes.object
}

export default ShowList;