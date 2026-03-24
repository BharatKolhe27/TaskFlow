import { useEffect, useCallback, useMemo, useState } from 'react';
import { useTasks } from '../hooks/useTask';
import TaskCard from '../components/TaskCard';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';

export default function Dashboard() {
    const { items, status, fetchTasks } = useTasks();
    const navigate = useNavigate();
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        // debugger;
        fetchTasks().unwrap().catch(() => toast.error('Failed to fetch tasks'));
    }, []);

    const handleClick = useCallback(
        (id: number) => navigate(`/task/${id}`),
        [navigate]
    );

    const filtered = useMemo(() => {
        if (filter === 'completed') return items.filter((t) => t.completed);
        if (filter === 'pending') return items.filter((t) => !t.completed);
        return items;
    }, [items, filter]);

    if (status === 'loading') return <p>Loading...</p>;

    return (
        <>
            <Navbar />

            <div className="container">
                <h2>Dashboard</h2>

                <div className="filters">
                    <button
                        className={filter === 'all' ? 'active' : ''}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>

                    <button
                        className={filter === 'completed' ? 'active' : ''}
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </button>

                    <button
                        className={filter === 'pending' ? 'active' : ''}
                        onClick={() => setFilter('pending')}
                    >
                        Pending
                    </button>
                </div>

                {filtered.map((task) => (
                    <TaskCard key={task.id} task={task} onClick={handleClick} />
                ))}
            </div>
        </>
    );
}