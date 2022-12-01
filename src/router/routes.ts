import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from '@/views/home';
import AboutData from '@/views/about.data';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: lazy(() => import('@/views/about')),
    data: AboutData,
  },
  {
    path: '**',
    component: lazy(() => import('@/views/404')),
  },
];
