import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

      {/* New Task */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl">
        <h2 className="text-3xl font-bold text-blue-400">
          {data?.taskCounts?.newTask}
        </h2>
        <h3 className="text-gray-300 mt-1 font-medium">
          New Task
        </h3>
      </div>

      {/* Completed */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl">
        <h2 className="text-3xl font-bold text-emerald-400">
          {data?.taskCounts?.completed}
        </h2>
        <h3 className="text-gray-300 mt-1 font-medium">
          Completed
        </h3>
      </div>

      {/* Active */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl">
        <h2 className="text-3xl font-bold text-yellow-400">
          {data?.taskCounts?.active}
        </h2>
        <h3 className="text-gray-300 mt-1 font-medium">
          Accepted
        </h3>
      </div>

      {/* Failed */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl">
        <h2 className="text-3xl font-bold text-red-400">
          {data?.taskCounts?.failed}
        </h2>
        <h3 className="text-gray-300 mt-1 font-medium">
          Failed
        </h3>
      </div>

    </div>
  )
}

export default TaskListNumbers