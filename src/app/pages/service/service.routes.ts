import { Routes } from "@angular/router";

export const ServiceRoutes: Routes = [
    {
        path: '',
        title: 'Akim services',
        loadComponent: () => import('./service-list/service-list.component').then(r => r.ServiceListComponent)
    },
    {
        path: ':slug',
        title: 'Service détails',
        loadComponent: () => import('./service-details/service-details.component').then(r => r.ServiceDetailsComponent)
    },
    {
        path: 'domaine',
        title: 'Akim Service',
        children: [
            {
                path: ':domaineSlug',
                loadComponent: () => import('./service-by-domaine/service-by-domaine.component').then(r => r.ServiceByDomaineComponent)
            }
        ]
    }
]