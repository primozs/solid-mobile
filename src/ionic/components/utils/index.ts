import {
  Config as CoreConfig,
  Platforms,
  getPlatforms as getPlatformsCore,
  isPlatform as isPlatformCore,
} from '@ionic/core/components';

export const isPlatform = (platform: Platforms) => {
  return isPlatformCore(window, platform);
};

export const getPlatforms = () => {
  return getPlatformsCore(window);
};

export const getConfig = (): CoreConfig | null => {
  if (typeof (window as any) !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const Ionic = (window as any).Ionic as Record<string, unknown>;
    if (Ionic && Ionic.config) {
      const cnf = Ionic.config as CoreConfig;
      return cnf;
    }
  }
  return null;
};
