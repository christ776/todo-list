import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './List-Item';

const List = ({ tasks, removeTask, updateTask }) => {
  const taskItems = tasks.map(task =>
    (<ListItem
      key={task.id}
      task={task}
      removeTask={removeTask}
      updateTask={updateTask}
    />));
  return (
    <div className="task-list" style={styles.container}>
      {taskItems}
    </div>
  );
};

export default List;

List.propTypes = {

  removeTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape).isRequired,
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
