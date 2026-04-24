import { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState([])
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    setLocalStorage() // only initializes if not exists

    const { employees } = getLocalStorage()
    setUserData(employees)
    setHasHydrated(true)
  }, [])

  useEffect(() => {
    if (hasHydrated) {
      localStorage.setItem('employees', JSON.stringify(userData))
    }
  }, [hasHydrated, userData])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
