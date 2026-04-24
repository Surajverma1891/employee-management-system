import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-4 md:p-8">

      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-6 py-5 shadow-2xl">
          <Header changeUser={props.changeUser} />
        </div>

        {/* Top Welcome + Stats */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Welcome */}
          <div className="md:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl">
            <h1 className="text-4xl font-bold tracking-wide">
              Welcome Admin 👋
            </h1>
            <p className="mt-3 text-gray-300 text-lg">
              Manage employee tasks quickly and efficiently.
            </p>

            <div className="mt-6 h-2 w-40 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-28 bg-emerald-500 rounded-full"></div>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl flex flex-col justify-center">
            <h3 className="text-gray-400 text-sm uppercase tracking-widest">
              Dashboard
            </h3>
            <p className="text-5xl font-bold text-emerald-400 mt-3">
              Admin
            </p>
            <p className="text-gray-300 mt-2">
              Task Management Panel
            </p>
          </div>
        </div>

        {/* Main Sections */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Create Task */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 bg-white/5">
              <h2 className="text-2xl font-semibold text-emerald-400">
                Create Task
              </h2>
            </div>

            <div className="p-6 min-h-[580px]">
              <CreateTask />
            </div>
          </div>

          {/* All Tasks */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 bg-white/5">
              <h2 className="text-2xl font-semibold text-emerald-400">
                All Tasks
              </h2>
            </div>

            <div className="p-6 min-h-[580px] overflow-auto">
              <AllTask />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminDashboard