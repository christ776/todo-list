import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  componentDidUpdate() {
    this.text.focus();
    this.text.selectionStart = this.text.value.length;
    this.text.selectionEnd = this.text.value.length;
  }

  render() {
    const { text, id } = this.props.task;
    const { isEditing } = this.state;

    if (isEditing) {
      return (
        <div>
          <input
            type="text"
            ref={(input) => { this.text = input; }}
            defaultValue={text}
            key={id}
            style={styles.itemEditing}
          />
        </div>
      );
    }

    return (
      <div
        role="menuitem"
        tabIndex={id}
        key={id}
        style={styles.item}
        onClick={() => this.setState({ isEditing: !this.state.isEditing })}
      >
        {text}
      </div>
    );
  }
}

export default ListItem;

ListItem.defaultProps = { isEditing: false };

ListItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
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
  itemEditing: {
    outline: 'none',
    border: 0,
    padding: 10,
    color: 'inherit',
    font: '18px system-ui',
    background: 'transparent',
  },
};
