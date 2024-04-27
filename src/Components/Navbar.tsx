import "../css/Navbar.css"
const Navbar = ({isAdmin, setIsAdmin}: {isAdmin: boolean, setIsAdmin: () => void}) => {
  return (
    <div className="navbar">
     <p>Admin</p>
     <input checked ={!isAdmin} onChange={() => setIsAdmin(isAdmin => !isAdmin)} type="checkbox" id="switch" /><label id="toggle-label" for="switch">Toggle</label>
     <p>User</p>
    </div>
  )
}

export default Navbar