import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function TaskDetails() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className="container"> 
        <div className="details-card">
          <h2>Task Details</h2>

          <p>
            <strong>Task ID:</strong> {id}
          </p>

          <p>
            This is a detailed view of the selected task.
          </p>
        </div>
      </div>
    </>
  );
}