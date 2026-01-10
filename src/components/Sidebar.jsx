import React from 'react'
import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `block rounded-lg px-3 py-2 text-sm ${
    isActive ? "bg-slate-200 font-medium" : "hover:bg-slate-100"
  }`

function Sidebar() {
   return (
    <aside className="w-56">
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="mb-4">
          <div className="text-lg font-semibold">Momentum</div>
          <div className="text-xs text-slate-500">Focus-driven productivity</div>
        </div>

        <nav className="space-y-1">
          <NavLink to="/" className={linkClass} end>
            Today
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/history" className={linkClass}>
            History
          </NavLink>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
