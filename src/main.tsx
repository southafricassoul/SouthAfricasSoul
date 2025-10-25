import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';
import PlaceholderPage from './pages/PlaceholderPage.tsx';
import './index.css';
import { menuOptions } from './lib/menuOptions.ts';

const kebabCase = (str: string) => str.replace(/&/g, 'and').replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-').toLowerCase();

const generateRoutes = (items: any[], parentPath = '') => {
  let routes: any[] = [];
  items.forEach(item => {
    if (item.href && item.href.startsWith('#')) return;

    // A more robust way to generate the path
    const pathSegment = kebabCase(item.label);
    const currentPath = parentPath ? `${parentPath}/${pathSegment}` : pathSegment;

    if (item.dropdown) {
      routes = routes.concat(generateRoutes(item.dropdown, currentPath));
    } else {
      routes.push({
        path: currentPath,
        element: <PlaceholderPage title={item.label} />,
      });
    }
  });
  return routes;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      ...generateRoutes(menuOptions),
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
