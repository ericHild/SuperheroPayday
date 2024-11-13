import { Routes } from '@angular/router';
import { herosResolver } from './shared/resolvers/heros-resolver.service';

export const routes: Routes = [
    { 
        path: '',   redirectTo: '/welcome', pathMatch: 'full'
    },
    { 
        path: 'welcome', loadComponent: () => import('./pages/welcome/welcome.component').then(c => c.WelcomeComponent)
    },
    { 
        path: 'dashboard',
        loadComponent: () => import('./pages/rh-dashbord/rh-dashboard.component').then(c => c.RHDashboardComponent),
        resolve: { heros: herosResolver }
    },
    {
        path: 'hero/:id', loadComponent: () => import('./pages/hero-detail/hero-detail.component').then(c => c.HeroDetailComponent)
    }
];
