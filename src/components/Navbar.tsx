import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
export default function Navbar() {
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const { toggleTheme, theme } = useTheme();

    const handleLogout = () => {
        logout();
        navigate('/', { replace: true });
    };

    return (
        <div className="navbar">
            <h3>TaskFlow</h3>
            <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/settings">Settings</Link>
                {/* <Link to="/create">Create</Link> */}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>{user?.name}</span>



                {/* Theme Toggle */}
                <div
                    className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`}
                    onClick={toggleTheme}
                >
                    <div className="theme-circle">
                        {theme === 'dark' ? '🌙' : '☀️'}
                    </div>
                </div>

                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}