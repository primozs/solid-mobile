import { lazy } from 'solid-js';
import { RouteDefinition, Navigate } from '@solidjs/router';

import TabsPage from '@/views/TabsPage';
import AboutData from '@/views/about.data';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    element: () => <Navigate href="/home" />,
    // element: () => <Navigate href="/tabs/tab1" />,
  },
  {
    path: '/home',
    component: lazy(() => import('@/views/HomePage')),
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '/',
        element: () => <Navigate href="/tabs/tab1" />,
      },
      {
        path: 'tab1',
        component: lazy(() => import('@/views/Tab1Page')),
      },
      {
        path: 'tab2',
        component: lazy(() => import('@/views/Tab2Page')),
      },
      {
        path: 'tab3',
        component: lazy(() => import('@/views/Tab3Page')),
      },
    ],
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
