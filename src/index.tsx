import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExListPage from './pages/ExListPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import ExDetailPage from './pages/ExDetailPage';
import MoodColor from './components/test/moodColor';
import MakeImgContainer from './components/makeImg/makeImgContainer';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ExListPage/>} />
          <Route path='/exlist' element={<ExListPage/>} />
          <Route path='/exlist/:id' element={<ExDetailPage/>} />
          <Route path='/test' element={<MoodColor/>} />
          <Route path='/img' element={<MakeImgContainer/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
