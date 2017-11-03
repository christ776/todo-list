import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actionCreators from './reducer';
import List from './components/List';
import Input from './components/Input';
import Title from './components/Title';
import fetchTodos from './firebase';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(actionCreators.add(text)),
  fetch: items => dispatch(actionCreators.fetch(items)),
  remove: index => dispatch(actionCreators.remove(index)),
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidMount() {
    fetchTodos()
    .then((tasks) => {
      const { fetch } = this.props;
      fetch(tasks);
    }).catch((error) => {
      throw error;
    });
  }

  onAddTodo = (text) => {
    this.props.addTodo(text);
  }

  onRemoveTodo = (index) => {
    this.props.remove(index);
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return (
        <div
          className="snap"
        >
          <p>{'We&apos; re sorry — something&apos;s gone wrong.'}</p>
          <p>{'Our team has been notified, but click here fill out a report.'}</p>
        </div>
      );
    }
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
