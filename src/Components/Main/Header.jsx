import { Link } from 'react-router';
import './Header.css';

function Header() { 
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1>My Blog</h1>
                </div>
                
                {/* Navigation bar with links */}
                <nav className="navbar">
                    <ul className="nav-links">
                        {/* Navigation menu items */}
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        <li>
                            <Link to="/about"> About </Link>
                        </li>
                        <li>
                            <Link to="/posts"> Blog Posts </Link>
                        </li>
                        <li>
                            <Link to="/contact"> Contact </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;