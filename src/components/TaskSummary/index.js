// TaskSummary.js

import React, {Component} from 'react'

import './index.css'

class TaskSummary extends Component {
  render() {
    // Logic for calculating task metrics
    const {tasks} = this.props
    const totalTasks = tasks.length
    const completedTasks = tasks.filter(task => task.status === 'Completed')
      .length
    const completionRate =
      totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100

    return (
      <div className="task-summary">
        <h2>Task Summary</h2>
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Tasks: {completedTasks}</p>
        <p>Completion Rate: {completionRate.toFixed(2)}%</p>
      </div>
    )
  }
}

export default TaskSummary
