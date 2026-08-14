import { Routes } from '@angular/router';
import { ServiceRoutes } from './pages/service/service.routes';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/landing/landing.component').then(m => m.LandingComponent)
    },
    {
        path: 'services',
        loadChildren: () => import('./pages/service/service.routes').then(c => c.ServiceRoutes)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
