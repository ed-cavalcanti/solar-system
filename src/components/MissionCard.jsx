import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  render() {
    const { name, year, country, dest } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ dest }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  dest: PropTypes.string.isRequired,
};

export default MissionCard;
