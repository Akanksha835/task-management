// App.js

import React, {Component} from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskSummary from './components/TaskSummary'
import './App.css' // Import corresponding CSS file

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }
  }

  addTask = task => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, {...task, status: 'Pending'}], // Initialize status as 'Pending'
    }))
  }

  updateTaskStatus = (index, status) => {
    this.setState(prevState => {
      const updatedTasks = [...prevState.tasks]
      updatedTasks[index].status = status
      return {tasks: updatedTasks}
    })
  }

  render() {
    return (
      <div className="app">
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          updateTaskStatus={this.updateTaskStatus}
        />
        <TaskSummary tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App
