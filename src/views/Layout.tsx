import type { Component } from 'solid-js';
import {
  Link,
  useRoutes,
  // useLocation
} from '@solidjs/router';
import { routes } from '@/router/routes';

export const Layout: Component = () => {
  // const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Route />
      </main>
    </>
  );
};
