import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {

  countryList = items => (
    items.map(this.renderItem)
  );

  renderItem = (text, i) => {
    const { onClickItem } = this.props;

    return (
      <div
        role="menuitem"
        tabIndex={i}
        key={i}
        style={styles.item}
        onClick={() => onClickItem(i)}
      >
        {text}
      </div>
    );
  };


  render() {
    const { list } = this.props;

    return (
      <div style={styles.container}>
        {this.countryList(list)}
      </div>
    );
  }
}

List.propTypes = {
  onClickItem: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

List.defaultProps = {
  list: [],
};

const styles = {
  container: {
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
    font: '18px system-ui',
  },
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
};
