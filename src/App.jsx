import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage } from './utils/localStorage'

const parseLoggedInUser = () => {
  try {
    return JSON.parse(localStorage.getItem('loggedInUser'))
  } catch {
    return null
  }
}

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  // restore session
  useEffect(() => {
    const loggedInUser = parseLoggedInUser()

    if (loggedInUser) {
      setUser(loggedInUser.role)
      setLoggedInUserData(loggedInUser.data || null)
    }
  }, [])

  useEffect(() => {
    if (user !== 'employee' || !loggedInUserData?.email || !Array.isArray(userData)) {
      return
    }

    const latestEmployeeData = userData.find(
      (employee) => employee.email === loggedInUserData.email
    )

    if (!latestEmployeeData) {
      return
    }

    const storedUser = JSON.stringify(loggedInUserData)
    const latestUser = JSON.stringify(latestEmployeeData)

    if (storedUser !== latestUser) {
      setLoggedInUserData(latestEmployeeData)
    }

    localStorage.setItem('loggedInUser', JSON.stringify({
      role: 'employee',
      data: latestEmployeeData
    }))
  }, [loggedInUserData, user, userData])

  const handleLogin = (email, password) => {
    const { employees, admin } = getLocalStorage()
    const normalizedEmail = email.trim().toLowerCase()
    const normalizedPassword = password.trim()

    if (!normalizedEmail || !normalizedPassword) {
      return {
        success: false,
        message: 'Please enter both email and password.'
      }
    }

    const adminUser = admin.find(
      (a) =>
        a.email.trim().toLowerCase() === normalizedEmail &&
        a.password === normalizedPassword
    )

    if (adminUser) {
      setUser('admin')
      setLoggedInUserData(adminUser)

      localStorage.setItem('loggedInUser', JSON.stringify({
        role: 'admin',
        data: adminUser
      }))

      return { success: true }
    }

    const employee = employees.find(
      (e) =>
        e.email.trim().toLowerCase() === normalizedEmail &&
        e.password === normalizedPassword
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)

      localStorage.setItem('loggedInUser', JSON.stringify({
        role: 'employee',
        data: employee
      }))

      return { success: true }
    }

    return {
      success: false,
      message: 'Invalid credentials. Use one of the demo accounts below.'
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
