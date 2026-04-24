import React from 'react'

const AcceptTask = ({ data }) => {
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

      {/* Buttons */}
      <div className="flex justify-between mt-6 gap-3">
        <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 transition rounded-lg py-2 text-xs font-medium">
          Mark Completed
        </button>

        <button className="flex-1 bg-red-500 hover:bg-red-600 transition rounded-lg py-2 text-xs font-medium">
          Mark Failed
        </button>
      </div>

    </div>
  )
}

export default AcceptTask