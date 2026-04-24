import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData] = useContext(AuthContext)

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shadow-xl mt-5 text-white">

      {/* Header Row */}
      <div className="bg-white/10 border border-white/10 mb-3 py-3 px-4 flex justify-between rounded-2xl text-sm md:text-base font-semibold text-gray-300">
        <h2 className="w-1/5">Employee</h2>
        <h3 className="w-1/5">New</h3>
        <h5 className="w-1/5">Active</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>

      {/* Data */}
      <div className="space-y-2">

        {userData?.length > 0 ? (
          userData.map((elem, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 py-3 px-4 flex justify-between rounded-2xl hover:bg-white/10 transition"
            >
              <h2 className="w-1/5 font-medium">
                {elem.firstName}
              </h2>

              <h3 className="w-1/5 text-blue-400 font-semibold">
                {elem.taskCounts.newTask}
              </h3>

              <h5 className="w-1/5 text-yellow-400 font-semibold">
                {elem.taskCounts.active}
              </h5>

              <h5 className="w-1/5 text-emerald-400 font-semibold">
                {elem.taskCounts.completed}
              </h5>

              <h5 className="w-1/5 text-red-400 font-semibold">
                {elem.taskCounts.failed}
              </h5>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center py-6">
            No employee data available
          </p>
        )}

      </div>
    </div>
  )
}

export default AllTask