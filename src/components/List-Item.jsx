import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  static propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
    removeTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  componentDidUpdate() {
    if (this.text) {
      this.text.focus();
      this.text.selectionStart = this.text.value.length;
      this.text.selectionEnd = this.text.value.length;
    }
  }

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.update(event);
      this.stopEditing();
    } else if (event.keyCode === 27) {
      this.stopEditing();
    }
  }

  stopEditing = () => {
    this.setState({ isEditing: false });
  }

  update = (event) => {
    this.props.updateTask(event.target.value, this.props.task.id);
  }

  remove = () => {
    this.props.removeTask();
  }

  render() {
    const { task, id, completed } = this.props.task;
    const { isEditing } = this.state;
    const { updateTask } = this.props;

    if (isEditing) {
      return (
        <div>
          <input
            type="text"
            ref={(input) => { this.text = input; }}
            defaultValue={task}
            key={id}
            style={styles.itemEditing}
            onKeyUp={this.handleKeyUp}
          />
        </div>
      );
    }

    return (
      <div className="">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => updateTask({ task, completed: !completed, id })}
        />
        <label
          key={id}
          style={styles.item}
          onDoubleClick={() => this.setState({ isEditing: !isEditing })}
        >
          {task}
        </label>
      </div>

    );
  }
}

export default ListItem;

ListItem.defaultProps = { isEditing: false };

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
