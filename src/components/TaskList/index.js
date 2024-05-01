// TaskList.js

import React, {Component} from 'react'

import './index.css'
class TaskList extends Component {
  handleStatusChange = (index, status) => {
    this.props.updateTaskStatus(index, status) // Pass index and new status to updateTaskStatus function
  }

  render() {
    const {tasks} = this.props
    return (
      <div className="task-list">
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <h3>{task.taskName}</h3>
              <p>{task.taskDescription}</p>
              <p>Due Date: {task.dueDate}</p>
              <div>
                <button
                  onClick={() => this.handleStatusChange(index, 'Pending')}
                >
                  Pending
                </button>
                <button
                  onClick={() => this.handleStatusChange(index, 'Started')}
                >
                  Started
                </button>
                <button
                  onClick={() => this.handleStatusChange(index, 'Completed')}
                >
                  Completed
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TaskList
