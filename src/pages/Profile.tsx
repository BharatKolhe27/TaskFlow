import Navbar from '../components/Navbar';
import { useAuth } from '../hooks/useAuth';

export default function Profile() {
  const { user } = useAuth();

 return (
  <>
    <Navbar />

    <div className="container">
      <div className="page-card">
        <h2>Profile</h2>

        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Status:</strong> Active</p>
      </div>
    </div>
  </>
);
}