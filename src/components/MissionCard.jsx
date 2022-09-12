import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;

    return (
      <div data-testid="mission-card" id="missCard">
        <p id="mission-name">{ name }</p>
        <div id="mission-subtitle">
          <p data-testid="mission-year">{ year }</p>
          <p id="mission-country">{ country }</p>
        </div>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
