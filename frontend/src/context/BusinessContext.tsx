import { createContext, useContext } from 'react';
import type { AppConfig } from '../types';

export const DEFAULT_APP_CONFIG: AppConfig = {
  businessName: 'Barinoff',
  businessType: 'Мужская парикмахерская · Митино',
  appTitle: 'Barinoff — онлайн-запись',
  appDescription: 'Мы просто стрижём мужчин и делаем это превосходно.',
  timezone: 'Europe/Moscow',
  demoMode: true,
  adminProtected: false,
  features: { demoTour: true, demoAdminPreview: true },
};

export const BusinessContext = createContext<AppConfig>(DEFAULT_APP_CONFIG);

export function useBusiness(): AppConfig {
  return useContext(BusinessContext);
}
