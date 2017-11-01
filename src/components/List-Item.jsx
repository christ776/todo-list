import React from 'react';
import PropTypes from 'prop-types';

const onClickItem = () => {

};

function ListItem(props) {
  const { text, id } = props.task;
  return (
    <div
      role="menuitem"
      tabIndex={id}
      key={id}
      style={styles.item}
      onClick={onClickItem}
    >
      {text}
    </div>
  );
}

export default ListItem;

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
};
