import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Fallback } from './components';
import './App.css';

const Game = lazy(() => import('./routes/Game/Game'));
const Stats = lazy(() => import('./routes/Stats/Stats'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path='/' element={<Game />} />
            <Route path='/leaderboard' element={<Stats />} />
          </Routes>
        </Suspense>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
