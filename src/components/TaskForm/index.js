// TaskForm.js

import React, {Component} from 'react'

import './index.css'
class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskName: '',
      taskDescription: '',
      dueDate: '',
      assignee: '', // New state for assignee
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const {taskName, taskDescription, dueDate, assignee} = this.state // Include assignee in task data
    if (taskName.trim() && dueDate.trim() && assignee.trim()) {
      this.props.addTask({taskName, taskDescription, dueDate, assignee}) // Pass assignee to addTask function
      this.setState({
        taskName: '',
        taskDescription: '',
        dueDate: '',
        assignee: '',
      })
    } else {
      alert('Please fill in all required fields.')
    }
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="taskName"
          value={this.state.taskName}
          onChange={this.handleInputChange}
          placeholder="Task Name"
          required
        />
        <textarea
          name="taskDescription"
          value={this.state.taskDescription}
          onChange={this.handleInputChange}
          placeholder="Task Description"
        />
        <input
          type="date"
          name="dueDate"
          value={this.state.dueDate}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="text"
          name="assignee"
          value={this.state.assignee}
          onChange={this.handleInputChange}
          placeholder="Assignee" // Input for assignee
          required
        />
        <button type="submit">Add Task</button>
      </form>
    )
  }
}

export default TaskForm
