import React from 'react';
import missions from '../data/missions';
// import './MissionsModal.css';

class MissionsModal extends React.Component {
  render() {
    return (
      <div>
        {missions.map}
        <img src={ missions.image } alt="" />
      </div>
    );
  }
}

export default MissionsModal;
