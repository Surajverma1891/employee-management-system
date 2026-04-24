const employeesData = [
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 3, failed: 1 },
    tasks: []
  }
]

const adminData = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]

/* ---------------- INIT LOCAL STORAGE ---------------- */

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employeesData))
  localStorage.setItem("admin", JSON.stringify(adminData))
}

/* ---------------- SAFE PARSE ---------------- */

const safeParse = (key, fallback) => {
  try {
    const data = JSON.parse(localStorage.getItem(key))
    return Array.isArray(data) ? data : fallback
  } catch {
    return fallback
  }
}

/* ---------------- GET LOCAL STORAGE ---------------- */

export const getLocalStorage = () => {
  const employees = safeParse("employees", employeesData)
  const admin = safeParse("admin", adminData)

  return { employees, admin }
}