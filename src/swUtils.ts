const isProd = import.meta.env.MODE === 'production';

export const swSupported = () => {
  return 'serviceWorker' in navigator;
};

export const swRegister = async () => {
  if (!swSupported() || !isProd) return null;

  const registration = await navigator.serviceWorker.register(
    isProd ? '/sw.js' : '/dev-sw.js?dev-sw',
    {
      type: isProd ? 'classic' : 'module',
    },
  );
  return registration;
};
