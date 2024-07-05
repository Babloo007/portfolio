import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Error from './components/Error';

function App() {
  return (
      <div className='px-56 py-6 flex flex-col min-h-screen bg-slate-900 text-white' style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <Header />
          <div className='mx-28'>
              <Outlet />
          </div>
      </div>
  )
}

const appRouter = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
          {
              path: '/',
              element: <Home className='mb-4' />
          },
          {
              path: '/services',
              element: <Services />
          },
          {
              path: '/contact',
              element: <Contact />
          },
          {
              path: '/resume',
              element: <Resume />
          },
      ],
      errorElement: <Error />
  },
]);

export {appRouter};