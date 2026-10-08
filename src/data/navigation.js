/**
 * Application Navigation Metadata & Route Definitions
 */

export const APP_ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  RESUME_UPLOAD: '/resume/upload',
  RESUME_EDIT: '/resume/edit',
  RESUME_PREVIEW: '/resume/preview',
  LOGIN: '/login',
  REGISTER: '/register',
};

export const NAVIGATION_ITEMS = [
  {
    label: 'Dashboard',
    path: APP_ROUTES.DASHBOARD,
    category: 'main',
  },
  {
    label: 'Candidate Profile',
    path: APP_ROUTES.PROFILE,
    category: 'main',
  },
  {
    label: 'Upload Resume',
    path: APP_ROUTES.RESUME_UPLOAD,
    category: 'resume',
  },
  {
    label: 'Edit Resume',
    path: APP_ROUTES.RESUME_EDIT,
    category: 'resume',
  },
  {
    label: 'Preview Resume',
    path: APP_ROUTES.RESUME_PREVIEW,
    category: 'resume',
  },
];
