const NewTask = ({ data, onAccept }) => {
  return (
    <article className="flex h-full flex-col rounded-[24px] border border-sky-400/20 bg-sky-500/10 p-5 text-white shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-sky-400/30 bg-sky-400/15 px-3 py-1 text-xs font-medium text-sky-100">
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

      <button
        onClick={onAccept}
        className="mt-5 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-sky-600"
      >
        Accept Task
      </button>
    </article>
  )
}

export default NewTask
