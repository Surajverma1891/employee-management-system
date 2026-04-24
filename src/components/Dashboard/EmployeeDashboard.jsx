import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-4 md:p-8 text-white">

      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl">
          <Header changeUser={props.changeUser} data={props.data} />
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
          <TaskListNumbers data={props.data} />
        </div>

        {/* Task List */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl min-h-[60vh]">
          <TaskList data={props.data} />
        </div>

      </div>
    </div>
  )
}

export default EmployeeDashboard