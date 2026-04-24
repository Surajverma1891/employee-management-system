const TaskListNumbers = ({ data }) => {
  const summaryCards = [
    {
      label: 'New Tasks',
      value: data?.taskCounts?.newTask || 0,
      hint: 'Fresh assignments waiting for action.',
      valueClass: 'text-sky-300',
      badgeClass: 'bg-sky-400/20 text-sky-200'
    },
    {
      label: 'Completed',
      value: data?.taskCounts?.completed || 0,
      hint: 'Tasks already delivered or closed.',
      valueClass: 'text-emerald-300',
      badgeClass: 'bg-emerald-400/20 text-emerald-200'
    },
    {
      label: 'Active',
      value: data?.taskCounts?.active || 0,
      hint: 'Currently in progress and visible below.',
      valueClass: 'text-amber-300',
      badgeClass: 'bg-amber-400/20 text-amber-200'
    },
    {
      label: 'Failed',
      value: data?.taskCounts?.failed || 0,
      hint: 'Items that still need another attempt.',
      valueClass: 'text-rose-300',
      badgeClass: 'bg-rose-400/20 text-rose-200'
    }
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {summaryCards.map((card) => (
        <div
          key={card.label}
          className="rounded-[26px] border border-white/10 bg-slate-950/40 p-5 shadow-lg"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-300">{card.label}</p>
              <h2 className={`mt-3 text-4xl font-semibold ${card.valueClass}`}>
                {card.value}
              </h2>
            </div>

            <span className={`rounded-full px-3 py-1 text-xs font-medium ${card.badgeClass}`}>
              Live
            </span>
          </div>

          <p className="mt-5 text-sm text-slate-400">
            {card.hint}
          </p>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumbers
