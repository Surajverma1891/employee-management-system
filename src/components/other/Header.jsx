import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className="flex items-center justify-between">

      {/* Left Side */}
      <h1 className="text-xl md:text-2xl font-medium text-white">
        Hello <br />
        <span className="text-2xl md:text-3xl font-semibold text-emerald-400">
          {props.data?.firstName || 'Admin'} 👋
        </span>
      </h1>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className="bg-red-500 hover:bg-red-600 transition text-white text-sm md:text-base font-medium px-5 py-2 rounded-xl shadow-md"
      >
        Log Out
      </button>

    </div>
  )
}

export default Header