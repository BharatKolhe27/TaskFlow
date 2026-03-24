import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
  const [name, setName] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  //  Handle redirect AFTER auth state changes
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    if (!name.trim()) {
      toast.error('Name required');
      return;
    }

    // Only update state (NO navigation here)
    login({ name });
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Welcome</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}