import { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const AppRoutes = lazy(() => import('./routes/AppRoutes'));

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h2>Loading App...</h2>}>
        <AppRoutes />
      </Suspense>
    </ErrorBoundary>
  );
}