import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actionCreators from './todoListRedux';
import List from './components/List';
import Input from './Input';
import Title from './Title';
import fetchTodos from './firebase/firebase';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(actionCreators.add(text)),
  fetch: items => dispatch(actionCreators.fetch(items)),
  remove: index => dispatch(actionCreators.remove(index)),
});

class App extends Component {

  componentDidMount() {
    fetchTodos()
    .then((tasks) => {
      const { fetch } = this.props;
      fetch(tasks);
    })
    .catch(() => {
      process.stdout.write('Error fetching tasks');
    });
  }

  onAddTodo = (text) => {
    this.props.addTodo(text);
  }

  onRemoveTodo = (index) => {
    this.props.remove(index);
  }

  render() {
    const { todos } = this.props;

    return (
      <div style={styles.container}>
        <Title>
          children={'To-Do List'}
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List tasks={todos} />
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
