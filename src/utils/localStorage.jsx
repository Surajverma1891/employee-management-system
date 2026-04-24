const demoTasks = [
  {
    taskTitle: "Finish April attendance audit",
    taskDescription: "Cross-check late entries and share the final attendance summary with HR before the day ends.",
    taskDate: "2026-04-25",
    category: "Operations",
    active: true,
    newTask: false,
    failed: false,
    completed: false
  },
  {
    taskTitle: "Prepare welcome kit",
    taskDescription: "Keep the onboarding mail draft and employee documents checklist ready for the next new joiner.",
    taskDate: "2026-04-26",
    category: "Onboarding",
    active: false,
    newTask: true,
    failed: false,
    completed: false
  },
  {
    taskTitle: "Update employee ID list",
    taskDescription: "Review the current spreadsheet and confirm that every active employee has the correct ID mapping.",
    taskDate: "2026-04-21",
    category: "Records",
    active: false,
    newTask: false,
    failed: false,
    completed: true
  },
  {
    taskTitle: "Review leave balance",
    taskDescription: "Verify pending leave balances for the finance team and mark discrepancies for the admin review.",
    taskDate: "2026-04-20",
    category: "HR",
    active: false,
    newTask: false,
    failed: false,
    completed: true
  },
  {
    taskTitle: "Share holiday calendar",
    taskDescription: "Send the updated holiday calendar to the team and confirm that the shared drive version is current.",
    taskDate: "2026-04-18",
    category: "Communication",
    active: false,
    newTask: false,
    failed: false,
    completed: true
  },
  {
    taskTitle: "Collect pending documents",
    taskDescription: "Follow up on missing identity proofs from the vendor support team and close the task once received.",
    taskDate: "2026-04-17",
    category: "Compliance",
    active: false,
    newTask: false,
    failed: true,
    completed: false
  }
]

export const getTaskCounts = (tasks = []) => {
  return tasks.reduce(
    (counts, task) => {
      if (task.active) counts.active += 1
      if (task.newTask) counts.newTask += 1
      if (task.completed) counts.completed += 1
      if (task.failed) counts.failed += 1

      return counts
    },
    { active: 0, newTask: 0, completed: 0, failed: 0 }
  )
}

const employeesData = [
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    tasks: demoTasks,
    taskCounts: getTaskCounts(demoTasks)
  }
]

const adminData = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]

const cloneTasks = (tasks = []) => tasks.map((task) => ({ ...task }))

const getCountTotal = (taskCounts = {}) => {
  return (taskCounts.active || 0) +
    (taskCounts.newTask || 0) +
    (taskCounts.completed || 0) +
    (taskCounts.failed || 0)
}

const normalizeEmployee = (employee) => {
  const fallbackEmployee = employeesData.find(
    (defaultEmployee) => defaultEmployee.email === employee?.email
  )

  const employeeTasks = Array.isArray(employee?.tasks) ? employee.tasks : []
  const shouldUseFallbackTasks =
    employeeTasks.length === 0 &&
    getCountTotal(employee?.taskCounts) > 0 &&
    fallbackEmployee?.tasks?.length

  const tasks = shouldUseFallbackTasks
    ? cloneTasks(fallbackEmployee.tasks)
    : cloneTasks(employeeTasks)

  return {
    ...employee,
    tasks,
    taskCounts: getTaskCounts(tasks)
  }
}

const normalizeEmployees = (employees) => {
  if (!Array.isArray(employees) || employees.length === 0) {
    return employeesData.map((employee) => ({
      ...employee,
      tasks: cloneTasks(employee.tasks)
    }))
  }

  return employees.map(normalizeEmployee)
}

/* ---------------- INIT LOCAL STORAGE ---------------- */

const hasValidArray = (key) => {
  try {
    return Array.isArray(JSON.parse(localStorage.getItem(key)))
  } catch {
    return false
  }
}

export const setLocalStorage = () => {
  if (!hasValidArray("employees")) {
    localStorage.setItem("employees", JSON.stringify(employeesData))
  }

  if (!hasValidArray("admin")) {
    localStorage.setItem("admin", JSON.stringify(adminData))
  }
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
  const employees = normalizeEmployees(safeParse("employees", employeesData))
  const admin = safeParse("admin", adminData)

  return { employees, admin }
}
