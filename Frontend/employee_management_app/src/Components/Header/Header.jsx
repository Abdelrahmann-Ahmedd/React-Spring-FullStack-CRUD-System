import { Link } from "react-router"


function Header() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand mb-0 h1">Employee Managemant System</Link>
                </div>
            </nav>
        </>
    )
}

export default Header
