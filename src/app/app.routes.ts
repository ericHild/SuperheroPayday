import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '',   redirectTo: '/welcome', pathMatch: 'full'
    },
    { 
        path: 'welcome', loadComponent: () => import('./pages/welcome/welcome.component').then(c => c.WelcomeComponent)
    },
    { 
        path: 'rhDashboard', loadComponent: () => import('./pages/rh-dashbord/rh-dashboard.component').then(c => c.RHDashboardComponent)
    },
    {
        path: 'hero/:id', loadComponent: () => import('./pages/hero-detail/hero-detail.component').then(c => c.HeroDetailComponent)
    }
];
