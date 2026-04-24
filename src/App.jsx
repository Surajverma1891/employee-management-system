import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [userData] = useContext(AuthContext)

  // restore session
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const data = JSON.parse(loggedInUser)
      setUser(data.role)
      setLoggedInUserData(data.data || null)
    }
  }, [])

  // LOGIN FUNCTION (FIXED)
  const handleLogin = (email, password) => {

    const { employees, admin } = getLocalStorage()

    // ADMIN LOGIN
    const adminUser = admin.find(
      (a) => a.email === email && a.password === password
    )

    if (adminUser) {
      setUser('admin')

      localStorage.setItem('loggedInUser', JSON.stringify({
        role: 'admin'
      }))
      return
    }

    // EMPLOYEE LOGIN
    const employee = employees.find(
      (e) => e.email === email && e.password === password
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)

      localStorage.setItem('loggedInUser', JSON.stringify({
        role: 'employee',
        data: employee
      }))
    } else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && (
        <AdminDashboard changeUser={setUser} />
      )}

      {user === 'employee' && (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      )}
    </>
  )
}

export default App