import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div>
        <h2>{headline}</h2>
      </div>
    );
  }
}

Title.defaultProps = {
  headline: 'coisa',
};

Title.propTypes = {
  headline: PropTypes.string,
};

export default Title;
