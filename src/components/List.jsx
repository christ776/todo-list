import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './List-Item';

const List = (props) => {
  const { tasks } = props;
  const taskItems = tasks.map(task =>
    <ListItem task={task} />,
  );
  return (
    <div className="task-list" style={styles.container}>
      {taskItems}
    </div>
  );
};

export default List;

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
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
