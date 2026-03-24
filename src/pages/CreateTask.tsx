import { useState } from 'react';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

export default function CreateTask() {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (!title.trim()) {
      toast.error('Task title required');
      return;
    }

    toast.success('Task created (mock)');
    setTitle('');
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Create Task</h2>

        <input
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={handleSubmit}>Create</button>
      </div>
    </>
  );
}