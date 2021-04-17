import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => this.setState({
        todos: data
      })
      );
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(newEntry => {
        // console.log('Success:', newEntry);
        const updatedToDo = [...this.state.todos];
        // console.log(updatedToDo)
        updatedToDo.push(newEntry);
        this.setState({
          todos: updatedToDo
        });
      });

    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    */
  }

  toggleCompleted(todoId) {

    let matchingTodo;
    for (let i = 0; i < this.state.todos.length; i++) {
      const currentToDo = this.state.todos[i];
      if (currentToDo.todoId === todoId) {
        matchingTodo = i;
      }
    }

    const todos = this.state.todos;
    const isCompletedStatus = !todos[matchingTodo].isCompleted;
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isCompleted: isCompletedStatus })
    })
      .then(response => response.json())
      .then(data => {
        const newTodo = [...this.state.todos];
        newTodo[matchingTodo] = data;
        this.setState({ todos: newTodo });
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
