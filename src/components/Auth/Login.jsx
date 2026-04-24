import { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const result = handleLogin(email, password)

    if (result?.success) {
      setError('')
      setEmail('')
      setPassword('')
      return
    }

    setError(result?.message || 'Unable to login right now.')
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-300 mt-2">Login to continue</p>
        </div>

        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) setError('')
              }}
              className="w-full px-5 py-3 rounded-xl bg-white/10 border border-gray-500 text-white placeholder:text-gray-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (error) setError('')
                }}
                className="w-full px-5 py-3 rounded-xl bg-white/10 border border-gray-500 text-white placeholder:text-gray-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-sm text-emerald-400 hover:text-emerald-300"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {error && (
            <p className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          )}

          <div className="text-right">
            <a href="#" className="text-sm text-emerald-400 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg transition duration-300 shadow-lg">
            Log In
          </button>
        </form>

        <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-4 text-sm text-emerald-100">
          <p className="font-semibold text-emerald-300">Demo Credentials</p>
          <p className="mt-2">Admin: admin@example.com / 123</p>
          <p>Employee: employee2@example.com / 123</p>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Need an account?{' '}
          <span className="text-emerald-400 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
