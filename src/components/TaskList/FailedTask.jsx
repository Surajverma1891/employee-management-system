import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl text-white">

      {/* Top */}
      <div className="flex justify-between items-center">
        <span className="text-xs px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
          {data.category}
        </span>
        <span className="text-xs text-gray-300">{data.taskDate}</span>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-xl font-semibold">
        {data.taskTitle}
      </h2>

      {/* Description */}
      <p className="text-sm mt-2 text-gray-300 line-clamp-3">
        {data.taskDescription}
      </p>

      {/* Button */}
      <div className="mt-6">
        <button className="w-full bg-red-500 hover:bg-red-600 transition rounded-lg py-2 text-xs font-medium">
          Failed
        </button>
      </div>

    </div>
  )
}

export default FailedTask