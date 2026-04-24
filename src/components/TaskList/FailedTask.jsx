const FailedTask = ({ data }) => {
  return (
    <article className="flex h-full flex-col rounded-[24px] border border-rose-400/20 bg-rose-500/10 p-5 text-white shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-rose-400/30 bg-rose-400/15 px-3 py-1 text-xs font-medium text-rose-100">
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

      <div className="mt-5 rounded-xl border border-rose-400/25 bg-rose-500/15 px-4 py-2.5 text-center text-sm font-medium text-rose-100">
        Failed
      </div>
    </article>
  )
}

export default FailedTask
