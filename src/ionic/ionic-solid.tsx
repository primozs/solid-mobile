import { IonicConfig, initialize } from '@ionic/core/components';
import { ParentProps } from 'solid-js';
import { RouteDefinition, Router, useRoutes } from '@solidjs/router';
import { routes } from '@/router';

const ionicSolidInit = (config: IonicConfig = {}) => {
  /**
   * By default Ionic Framework hides elements that
   * are not hydrated, but in the CE build there is no
   * hydration.
   * TODO FW-2797: Remove when all integrations have been
   * migrated to CE build.
   */
  if (typeof (document as any) !== 'undefined') {
    document.documentElement.classList.add('ion-ce');
  }

  initialize({ ...config });
};

type Props = ParentProps<{
  config?: IonicConfig;
  routes?: RouteDefinition[];
  routesBasePath?: string;
}>;

export const IonicSolid = (props: Props) => {
  // eslint-disable-next-line
  ionicSolidInit(props.config);

  const full_routes: RouteDefinition[] = [
    {
      path: '',
      component: () => <>{props.children}</>,
      children: routes,
    },
  ];

  const AppRoutes = useRoutes(full_routes || []);

  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
};
