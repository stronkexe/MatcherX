import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/signup'}>Signup</Link>
        <Link to={'/login'}>Login</Link>
      </nav>
    </div>
  )
}
