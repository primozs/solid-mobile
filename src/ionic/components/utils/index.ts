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

/* eslint-disable */
export const getConfig = (): CoreConfig | null => {
  if (typeof (window as any) !== 'undefined') {
    const Ionic = (window as any).Ionic;
    if (Ionic && Ionic.config) {
      return Ionic.config;
    }
  }
  return null;
};
/* eslint-enable */
