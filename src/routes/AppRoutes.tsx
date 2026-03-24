import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useAuth } from '../hooks/useAuth';
import type { ReactNode } from 'react';

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const TaskDetails = lazy(() => import('./../pages/taskDetails'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const CreateTask = lazy(() => import('../pages/CreateTask'));
const NotFound = lazy(() => import('../pages/NotFound'));

//  Protected route
function ProtectedRoute({ children }: { children: ReactNode }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
}

//  Public route (for login)
function PublicRoute({ children }: { children: ReactNode }) {
    const { isAuthenticated } = useAuth();
    return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" replace />;
}

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<h3>Loading...</h3>}>
                <Routes>

                    {/* Login */}
                    <Route
                        path="/"
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />

                    {/* Dashboard */}
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* Task Details */}
                    <Route
                        path="/task/:id"
                        element={
                            <ProtectedRoute>
                                <TaskDetails />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/settings"
                        element={
                            <ProtectedRoute>
                                <Settings />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/create"
                        element={
                            <ProtectedRoute>
                                <CreateTask />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="*" element={<NotFound />} />

                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}