import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (!taskTitle || !taskDescription || !taskDate || !assignTo || !category) return

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    const updatedData = userData.map((elem) => {
      if (elem.firstName === assignTo) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
          }
        }
      }
      return elem
    })

    setUserData(updatedData)

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
  }

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl mt-5 text-white">

      <form onSubmit={submitHandler} className="grid md:grid-cols-2 gap-6">

        {/* Left Side */}
        <div className="space-y-4">

          <div>
            <label className="text-sm text-gray-300">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-emerald-400"
              type="text"
              placeholder="Make UI Design"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-emerald-400"
              type="date"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Assign To</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-emerald-400"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-emerald-400"
              type="text"
              placeholder="Design / Dev"
            />
          </div>

        </div>

        {/* Right Side */}
        <div className="flex flex-col">

          <label className="text-sm text-gray-300">Description</label>

          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full mt-1 h-full min-h-[200px] px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-emerald-400"
            placeholder="Write task details..."
          />

          <button
            type="submit"
            className="mt-5 bg-emerald-500 hover:bg-emerald-600 transition py-3 rounded-xl font-medium"
          >
            Create Task
          </button>

        </div>

      </form>
    </div>
  )
}

export default CreateTask