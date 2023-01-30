import React from 'react';
import Proptype from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { mission, handleModal } = this.props;
    return (
      <div
        data-testid="mission-card"
        className="mission-card"
        onClick={ () => handleModal(mission) }
      >
        <p
          className="mission-text"
          data-testid="mission-name"
        >
          {mission.name}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: Proptype.string.isRequired,
  year: Proptype.string.isRequired,
  country: Proptype.string.isRequired,
  destination: Proptype.string.isRequired,
};

export default MissionCard;
