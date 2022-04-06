import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  render() {
    const { headline } = this.props;
    return (
      <h2>
        { headline }
      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
