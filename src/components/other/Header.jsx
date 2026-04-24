const Header = (props) => {
  const userName = props.data?.firstName || 'Admin'
  const userRole = props.data ? 'Employee Dashboard' : 'Admin Dashboard'

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
          {userRole}
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
          Hello, {userName}
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          Track work, keep updates visible, and manage your day with less clutter.
        </p>
      </div>

      <button
        onClick={logOutUser}
        className="w-full rounded-2xl border border-red-400/30 bg-red-500/15 px-5 py-3 text-sm font-medium text-red-100 transition hover:bg-red-500/25 md:w-auto"
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
