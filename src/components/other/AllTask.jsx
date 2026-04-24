import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  const statCards = [
    {
      key: 'newTask',
      label: 'New',
      valueClass: 'text-sky-300',
      boxClass: 'border-sky-400/15 bg-sky-500/10'
    },
    {
      key: 'active',
      label: 'Active',
      valueClass: 'text-amber-300',
      boxClass: 'border-amber-400/15 bg-amber-500/10'
    },
    {
      key: 'completed',
      label: 'Completed',
      valueClass: 'text-emerald-300',
      boxClass: 'border-emerald-400/15 bg-emerald-500/10'
    },
    {
      key: 'failed',
      label: 'Failed',
      valueClass: 'text-rose-300',
      boxClass: 'border-rose-400/15 bg-rose-500/10'
    }
  ]

  return (
    <div className="space-y-3 text-white">
      {userData?.length > 0 ? (
        userData.map((employee) => (
          <div
            key={employee.id}
            className="rounded-[26px] border border-white/10 bg-white/5 p-4 shadow-lg transition hover:bg-white/10"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Employee
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {employee.firstName}
                </h3>
              </div>

              <div className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-slate-300">
                Total tasks: <span className="font-semibold text-white">{employee.tasks?.length || 0}</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {statCards.map((stat) => (
                <div
                  key={stat.key}
                  className={`rounded-2xl border p-4 ${stat.boxClass}`}
                >
                  <p className="text-sm text-slate-300">{stat.label}</p>
                  <p className={`mt-2 text-2xl font-semibold ${stat.valueClass}`}>
                    {employee.taskCounts?.[stat.key] || 0}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="rounded-2xl border border-dashed border-white/15 bg-white/5 py-6 text-center text-slate-400">
          No employee data available
        </p>
      )}
    </div>
  )
}

export default AllTask
