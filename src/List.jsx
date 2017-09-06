import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {

  countryList = items => (
    items.map(this.renderItem)
  );

  renderItem = (item, i) => {
    const { onClickItem } = this.props;
    const { text, id } = item;

    return (
      <div
        role="menuitem"
        tabIndex={i}
        key={i}
        style={styles.item}
        onClick={() => onClickItem(id)}
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
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
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
