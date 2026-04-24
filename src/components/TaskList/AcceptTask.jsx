const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <article className="flex h-full flex-col rounded-[24px] border border-amber-400/20 bg-amber-500/10 p-5 text-white shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-amber-400/30 bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-100">
          {data.category}
        </span>
        <span className="text-xs text-slate-300">{data.taskDate}</span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-white">
        {data.taskTitle}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-200">
        {data.taskDescription}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          onClick={onComplete}
          className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-600"
        >
          Mark Completed
        </button>

        <button
          onClick={onFail}
          className="rounded-xl bg-rose-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-rose-600"
        >
          Mark Failed
        </button>
      </div>
    </article>
  )
}

export default AcceptTask
