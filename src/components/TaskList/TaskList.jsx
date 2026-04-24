import { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'
import { getTaskCounts } from '../../utils/localStorage'

const getTaskStatus = (task) => {
  if (task.newTask) return 'newTask'
  if (task.active) return 'active'
  if (task.completed) return 'completed'
  if (task.failed) return 'failed'

  return 'newTask'
}

const getStatusPayload = (nextStatus) => ({
  newTask: nextStatus === 'newTask',
  active: nextStatus === 'active',
  completed: nextStatus === 'completed',
  failed: nextStatus === 'failed'
})

const sectionConfig = [
  {
    key: 'newTask',
    title: 'New Tasks',
    description: 'Fresh assignments waiting to be picked up.',
    emptyText: 'No new tasks right now.',
    countClass: 'bg-sky-400/20 text-sky-200'
  },
  {
    key: 'active',
    title: 'Active Tasks',
    description: 'Tasks currently being worked on.',
    emptyText: 'No active tasks yet.',
    countClass: 'bg-amber-400/20 text-amber-200'
  },
  {
    key: 'completed',
    title: 'Completed Tasks',
    description: 'Finished work stays here for quick reference.',
    emptyText: 'No completed task yet.',
    countClass: 'bg-emerald-400/20 text-emerald-200'
  },
  {
    key: 'failed',
    title: 'Failed Tasks',
    description: 'Tasks that need a retry or another review.',
    emptyText: 'No failed task yet.',
    countClass: 'bg-rose-400/20 text-rose-200'
  }
]

const TaskList = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext)
  const tasks = Array.isArray(data?.tasks) ? data.tasks : []

  const tasksWithIndex = tasks.map((task, taskIndex) => ({
    ...task,
    taskIndex,
    status: getTaskStatus(task)
  }))

  const sections = sectionConfig.map((section) => ({
    ...section,
    tasks: tasksWithIndex.filter((task) => task.status === section.key)
  }))

  const updateTaskStatus = (taskIndex, nextStatus) => {
    if (!data?.email) {
      return
    }

    const updatedUsers = userData.map((employee) => {
      if (employee.email !== data.email) {
        return employee
      }

      const updatedTasks = (employee.tasks || []).map((task, index) => {
        if (index !== taskIndex) {
          return task
        }

        return {
          ...task,
          ...getStatusPayload(nextStatus)
        }
      })

      return {
        ...employee,
        tasks: updatedTasks,
        taskCounts: getTaskCounts(updatedTasks)
      }
    })

    setUserData(updatedUsers)
  }

  const renderTaskCard = (task) => {
    if (task.status === 'newTask') {
      return (
        <NewTask
          key={task.taskIndex}
          data={task}
          onAccept={() => updateTaskStatus(task.taskIndex, 'active')}
        />
      )
    }

    if (task.status === 'active') {
      return (
        <AcceptTask
          key={task.taskIndex}
          data={task}
          onComplete={() => updateTaskStatus(task.taskIndex, 'completed')}
          onFail={() => updateTaskStatus(task.taskIndex, 'failed')}
        />
      )
    }

    if (task.status === 'completed') {
      return <CompleteTask key={task.taskIndex} data={task} />
    }

    return <FailedTask key={task.taskIndex} data={task} />
  }

  if (tasks.length === 0) {
    return (
      <div className="rounded-[28px] border border-dashed border-white/15 bg-slate-950/30 px-5 py-12 text-center">
        <h3 className="text-xl font-semibold text-white">No tasks available</h3>
        <p className="mt-2 text-sm text-slate-300">
          Once a task is assigned, it will appear here in the correct section.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {sections.map((section) => (
        <section
          key={section.key}
          className="rounded-[28px] border border-white/10 bg-slate-950/35 p-5 shadow-lg"
        >
          <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h4 className="text-xl font-semibold text-white">{section.title}</h4>
              <p className="mt-1 text-sm text-slate-300">{section.description}</p>
            </div>

            <span className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${section.countClass}`}>
              {section.tasks.length}
            </span>
          </div>

          {section.tasks.length > 0 ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {section.tasks.map(renderTaskCard)}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-white/10 bg-white/5 px-4 py-8 text-center text-sm text-slate-400">
              {section.emptyText}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}

export default TaskList
