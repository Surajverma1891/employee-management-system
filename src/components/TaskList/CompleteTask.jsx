import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl text-white">

      {/* Top */}
      <div className="flex justify-between items-center">
        <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          {data.category}
        </span>
        <span className="text-xs text-gray-300">{data.taskDate}</span>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-xl font-semibold text-white">
        {data.taskTitle}
      </h2>

      {/* Description */}
      <p className="text-sm mt-2 text-gray-300 line-clamp-3">
        {data.taskDescription}
      </p>

      {/* Button */}
      <div className="mt-6">
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 transition rounded-lg py-2 text-xs font-medium">
          Completed
        </button>
      </div>

    </div>
  )
}

export default CompleteTask