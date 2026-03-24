import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

 return (
  <>
    <Navbar />

    <div className="container">
      <div className="page-card">
        <h2>Settings</h2>

        <p>Current Theme: <strong>{theme}</strong></p>

        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  </>
);
}