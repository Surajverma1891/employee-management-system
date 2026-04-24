import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  const employeeName = props.data?.firstName || 'Employee'
  const totalTasks = props.data?.tasks?.length || 0
  const activeTasks = props.data?.taskCounts?.active || 0
  const pendingTasks = props.data?.taskCounts?.newTask || 0

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-4 py-5 md:px-8 md:py-8 text-white">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
          <Header changeUser={props.changeUser} data={props.data} />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.6fr,1fr]">
          <div className="overflow-hidden rounded-[30px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/20 via-white/8 to-slate-900/70 p-6 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">
              Employee Workspace
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
              {employeeName}, your tasks are now easier to track and manage.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Keep an eye on new assignments, move work into active status, and
              update progress without hunting through the page.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
                  Total Tasks
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">{totalTasks}</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
                  Active Now
                </p>
                <p className="mt-2 text-2xl font-semibold text-emerald-300">{activeTasks}</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
                  Waiting
                </p>
                <p className="mt-2 text-2xl font-semibold text-sky-300">{pendingTasks}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-300">
              Today's Focus
            </p>
            <div className="mt-5 rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-5">
              <p className="text-sm text-slate-300">Tasks in motion</p>
              <p className="mt-2 text-5xl font-semibold text-emerald-300">
                {activeTasks}
              </p>
              <p className="mt-3 text-sm text-slate-300">
                {activeTasks > 0
                  ? 'Open the active section below to finish or update current work.'
                  : 'No active task yet. You can accept a new task from the section below.'}
              </p>
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-sm text-slate-300">Quick note</p>
                <p className="mt-1 text-sm text-white">
                  New tasks move to active as soon as you accept them.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-sm text-slate-300">Status update</p>
                <p className="mt-1 text-sm text-white">
                  Completed and failed tasks stay visible in separate sections for easy tracking.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[30px] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl md:p-6">
          <TaskListNumbers data={props.data} />
        </div>

        <div className="rounded-[30px] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl md:p-6">
          <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-300">
                Task Board
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                View every task by status
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Active tasks are now shown in their own section below, so they do not get lost.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
              Total visible task cards: <span className="font-semibold text-white">{totalTasks}</span>
            </div>
          </div>

          <div className="mt-6">
            <TaskList data={props.data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
